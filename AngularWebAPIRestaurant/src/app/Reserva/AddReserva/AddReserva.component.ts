import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Reserva } from 'src/app/Modelo/Reserva';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-add',
  templateUrl: './AddReserva.component.html',
  styleUrls: ['./AddReserva.component.css']
})
export class AddReservaComponent implements OnInit {

  reserva: Reserva = new Reserva();
  clientes: Cliente[];
  cliente: Cliente = new Cliente();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.CargarClientesEnSelect();
  }

  GuardarReserva() {
    console.log(this.reserva)
    this.reserva.id_trabajador = 1;//La reserva se asigna al trabajador por defecto, más adelante se asignará a un trabajador real
    this.service.createReserva(this.reserva)
      .subscribe(data => {
        alert("Se añadirá la reserva");
        this.router.navigate(["gestionarReservas"]);
      })
  }

  GuardarCliente() {
    this.service.createCliente(this.cliente)
      .subscribe(data => {
        alert("Se ha guardado el cliente ");
        console.log("Cliente guardado");
        console.log(this.cliente);
        this.CargarClientesEnSelect();
      })
  }

  VolverAGestion() {
    this.router.navigate(["gestionarReservas"]);
  }

  CargarClientesEnSelect() {
    this.service.getClientes()
      .subscribe(data => {
        this.clientes = data;
        this.clientes.reverse();
      })
  }
}
