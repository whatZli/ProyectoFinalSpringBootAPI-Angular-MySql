import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Reserva } from 'src/app/Modelo/Reserva';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Trabajador } from 'src/app/Modelo/Trabajador';
import { Factura } from 'src/app/Modelo/Factura';

@Component({
  selector: 'app-listar',
  templateUrl: './ListarReserva.component.html',
  styleUrls: ['./ListarReserva.component.css']
})
export class ListarReservaComponent implements OnInit {
  title: String = "reservas";
  reservas: Reserva[];
  fechaHoyDate: Date = new Date();
  fechaHoyString: String = this.fechaHoyDate.getFullYear() + "-" + ("0" + (this.fechaHoyDate.getMonth() + 1)).slice(-2) + "-" + ("0" + this.fechaHoyDate.getDate()).slice(-2);
  fechaHoyFormatoES: String = ("0" + this.fechaHoyDate.getDate()).slice(-2) + "-" + ("0" + (this.fechaHoyDate.getMonth() + 1)).slice(-2) + "-" + this.fechaHoyDate.getFullYear();
  fechaHaceUnaSemanaDate: Date = new Date();
  fechaHaceUnaSemanaString: String;
  reserva: Reserva;
  clientes: Array<Cliente> = [];
  cliente = new Cliente();
  totalPersonas: number = 0;

  btnVerUltimosDias: Boolean = false;
  btnVerHoy: Boolean = false;
  btnBuscarFecha: Boolean = false;
  btnBuscarEntreFechas: Boolean = false;

  fecha1: String;
  fecha2: String;
  trabajadores: Trabajador[];
  trabajador: Trabajador = new Trabajador();

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.VerReservasHoy();
  }

  VerTodasReservas() {
    this.btnBuscarFecha = false;
    this.btnBuscarEntreFechas = false;
    this.btnVerHoy = false;
    this.service.getReservas()
      .subscribe(data => {
        this.reservas = data;
      });
    this.title = "todas las reservas";
  }

  VerUltimosDias() {
    this.fechaHaceUnaSemanaDate.setMilliseconds(this.fechaHoyDate.getMilliseconds() - (1000 * 60 * 60 * 24 * 6));
    this.fechaHaceUnaSemanaString = this.fechaHaceUnaSemanaDate.getFullYear() + "-" + ("0" + (this.fechaHaceUnaSemanaDate.getMonth() + 1)).slice(-2) + "-" + ("0" + this.fechaHaceUnaSemanaDate.getDate()).slice(-2);
    console.log(this.fechaHaceUnaSemanaDate)
    this.btnBuscarFecha = false;
    this.btnBuscarEntreFechas = false;
    this.btnVerHoy = false;
    this.btnVerUltimosDias = true;
    this.totalPersonas = 0;
    this.reservas = [];
    this.service.getTrabajadores().subscribe(data => this.trabajadores = data)
    this.service.getReservasEntreFechas(this.fechaHaceUnaSemanaString, this.fechaHoyString)
      .subscribe(data => {
        this.reservas = data.reverse();
        this.clientes = [];
        for (let i = 0; i < this.reservas.length; i++) {
          this.reserva = this.reservas[i];
          this.totalPersonas = this.totalPersonas + this.reserva.personas;
          this.title = "reservas entre " + this.fechaHaceUnaSemanaString + " y " + this.fechaHoyString;
          this.service.getClienteId(this.reserva.id_cliente)
            .subscribe(data2 => {
              this.clientes[i] = data2;
            })
        }
      });
  }

  VerReservasHoy() {
    this.btnBuscarFecha = false;
    this.btnBuscarEntreFechas = false;
    this.btnVerHoy = true;
    this.btnVerUltimosDias = false;
    this.totalPersonas = 0;
    this.reservas = [];
    this.service.getTrabajadores().subscribe(data => this.trabajadores = data)
    this.service.getReservasHoy()
      .subscribe(data => {
        this.reservas = data;
        this.clientes = [];
        for (let i = 0; i < this.reservas.length; i++) {
          this.reserva = this.reservas[i];
          this.totalPersonas = this.totalPersonas + this.reserva.personas;
          this.title = "reservas para hoy " + this.fechaHoyFormatoES + " (" + this.totalPersonas + " personas)";
          this.service.getClienteId(this.reserva.id_cliente)
            .subscribe(data2 => {
              this.clientes[i] = data2;
            })
        }
      });

  }

  ActivarBuscarPorFecha() {
    this.btnBuscarEntreFechas = false;
    this.btnBuscarFecha = true;
    this.btnVerHoy = false;
    this.btnVerUltimosDias = false;
    this.reservas = null;//Para limpiar la lista de reservas
    this.title = "reservas por fecha";
  }
  BuscarPorFecha() {
    this.service.getReservasFecha(this.fecha1)
      .subscribe(data => {
        this.reservas = data;
        for (let i = 0; i < data.length; i++) {
          this.reserva = data[i];
          this.totalPersonas = this.totalPersonas + this.reserva.personas;
        }
        this.title = "reservas para " + this.fecha1 + " (" + this.totalPersonas + " personas)";
        this.totalPersonas = 0;
      });
  }

  ActivarBuscarEntreFechas() {
    this.btnBuscarFecha = false;
    this.btnBuscarEntreFechas = true;
    this.btnVerHoy = false;
    this.btnVerUltimosDias = false;
    this.reservas = null;//Para limpiar la lista de reservas
    this.title = "reservas entre fechas";
  }
  BuscarEntreFechas() {
    this.service.getReservasEntreFechas(this.fecha1, this.fecha2)
      .subscribe(data => {
        this.reservas = data;
        this.title = "reservas entre " + this.fecha1 + " y " + this.fecha2;
      });
  }

  Confirmar(reserva: Reserva) {
    reserva.confirmacion = true;
    this.service.updateReserva(reserva).subscribe(data => {
      this.reserva = data;
    });
    console.log(reserva)
  }

  Cancelar(reserva: Reserva) {
    reserva.cancelada = true;
    this.service.updateReserva(reserva).subscribe(data => {
      this.reserva = data;
    });
    console.log(reserva)
  }

  SelectChangeTrabajador(id_reserva: number, event: any) {
    let idYNombre: String = event.target.value;
    let separar: String[] = idYNombre.split("-");
    let idTrabajador: number = Number(separar[0]);
    let reservaActual: Reserva;

    this.service.getReservaId(id_reserva).subscribe(data => {
      reservaActual = data;
      reservaActual.id_trabajador = idTrabajador;
      this.service.updateReserva(reservaActual)
        .subscribe(data2 => {
          reservaActual = data2;
          console.log(reservaActual)
        })
    })
  }

  ChangeMesa(id_reserva: number, event: any) {
    let reservaActual: Reserva;
    let numeroMesa: number = event.target.value;

    this.service.getReservaId(id_reserva).subscribe(data => {
      reservaActual = data;
      reservaActual.mesa = numeroMesa;
      this.service.updateReserva(reservaActual)
        .subscribe(data2 => {
          reservaActual = data2;
          console.log(reservaActual)
        })
    })
  }

  ActivarReserva(id_reserva: number, event: any) {
    let reservaActual: Reserva;
    this.service.getReservaId(id_reserva).subscribe(data => {
      reservaActual = data;
      if (reservaActual.mesa != 0 && reservaActual.id_trabajador != 0) {
        reservaActual.activa = true;
        this.service.updateReserva(reservaActual)
          .subscribe(data2 => {
            reservaActual = data2;



            let fechaAhoraDate: Date = new Date();
            let fechaAhoraString: String = fechaAhoraDate.getFullYear() + "-" + ("0" + (fechaAhoraDate.getMonth() + 1)).slice(-2) + "-" + ("0" + fechaAhoraDate.getDate()).slice(-2);
            let horaActualString: String = fechaAhoraDate.getHours() + ":" + fechaAhoraDate.getMinutes() + ":" + fechaAhoraDate.getSeconds();

            let factura: Factura = new Factura();
            factura.id_reserva = data.id;
            factura.fecha = fechaAhoraString;
            factura.hora = horaActualString;
            factura.iva = 21;

            console.log(factura);
            this.service.createFactura(factura).subscribe();
            this.service.getFacturas().subscribe(data3 => {
              console.log(data3);
            });
            this.VerReservasHoy();
          })
      }
    })
  }

  AniadirVerProductos(id_reserva: number) {
    localStorage.setItem("idReserva", id_reserva.toString());
    this.router.navigate(["editFactura"]);
  }

  VerFactura(id_reserva: number) {
    localStorage.setItem("idReserva", id_reserva.toString());
    this.router.navigate(["verFactura"]);
  }

  TerminarYFinalizar(reserva: Reserva) {
    reserva.finalizada = true;
    this.service.updateReserva(reserva).subscribe(data => {
      this.reserva = data;
    });
    console.log(reserva)
  }

  Nuevo() {
    this.router.navigate(["addReserva"]);
  }

  Ver(reserva: Reserva): void {
    localStorage.setItem("idReserva", reserva.id.toString());
    this.router.navigate(["verReserva"]);
  }

  Editar(reserva: Reserva): void {
    localStorage.setItem("idReserva", reserva.id.toString());
    this.router.navigate(["editReserva"]);
  }

  Delete(reserva: Reserva) {
    this.service.deleteReserva(reserva)
      .subscribe(data => {
        this.reservas = this.reservas.filter(p => p !== reserva);
        alert("Se eliminará la reserva seleccionada");
      })
  }

}
