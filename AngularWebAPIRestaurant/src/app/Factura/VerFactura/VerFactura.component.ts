import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Reserva } from 'src/app/Modelo/Reserva';
import { Factura } from 'src/app/Modelo/Factura';
import { Info } from 'src/app/Modelo/Info';
import { Trabajador } from 'src/app/Modelo/Trabajador';
import { FacturaLineas } from 'src/app/Modelo/FacturaLineas';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-edit',
  templateUrl: './VerFactura.component.html',
  styleUrls: ['./VerFactura.component.css']
})
export class VerFacturaComponent implements OnInit {

  factura: Factura = new Factura();
  info: Info[];
  info_nombre: String;
  info_direccion: String;
  info_email: String;
  info_telefono: String;

  reserva: Reserva;
  reserva_finalizada: boolean = true;

  cliente: Cliente;
  cliente_nombre: String;
  cliente_apellidos: String;
  cliente_telefono: String;

  trabajador: Trabajador;
  trabajador_nombre: String;
  trabajador_apellidos: String;

  facturaLineas: FacturaLineas[];
  productos: Producto[];

  precio_total: number = 0;
  precio_sin_iva: number = 0;
  iva: number = 0;
  precio_iva_solo: number = 0;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {

    this.Ver();

  }

  Ver() {
    let id = localStorage.getItem("idReserva");
    this.service.getFacturaPorIDReserva(+id)
      .subscribe(data => {
        this.factura = data;
        this.iva = data.iva;

        this.service.getReservaId(data.id_reserva).subscribe(data2 => {
          this.reserva = data2;
          this.reserva_finalizada = data2.finalizada;

          this.service.getClienteId(data2.id_cliente).subscribe(data3 => {
            this.cliente = data3;

            this.cliente_nombre = data3.nombre;
            this.cliente_apellidos = data3.apellidos;
            this.cliente_telefono = data3.telefono;
          })

          this.service.getTrabajadorId(data2.id_trabajador).subscribe(data3 => {
            this.trabajador = data3;
            this.trabajador_nombre = this.trabajador.nombre;
            this.trabajador_apellidos = this.trabajador.apellidos;
          });

        })

        this.service.getFacturaLineasPorIDFactura(data.id).subscribe(data2 => {
          this.facturaLineas = data2;
          this.productos = [];//Vaciamos el array de productos antes de insertar
          this.precio_iva_solo = 0;
          this.precio_sin_iva = 0;
          this.precio_total = 0;
          for (let i = 0; i < data2.length; i++) {
            this.service.getProductoId(data2[i].id_producto).subscribe(data3 => {
              this.productos[i] = data3;

              let lf_precio = data3.precio;
              let p_cantidad = this.facturaLineas[i].cantidad;
              let f_iva = this.iva / 100;

              this.precio_iva_solo = this.precio_iva_solo + (lf_precio * p_cantidad) * f_iva;
              this.precio_iva_solo=Number((this.precio_iva_solo).toFixed(2));
              console.log(this.precio_iva_solo)
              this.precio_sin_iva =(this.precio_sin_iva + lf_precio * p_cantidad);
              this.precio_sin_iva=Number((this.precio_sin_iva).toFixed(2));

              console.log(this.precio_sin_iva)
              this.precio_total = (( lf_precio * p_cantidad) * f_iva) + (this.precio_total+ lf_precio * p_cantidad);
              this.precio_total=Number((this.precio_total).toFixed(2));

              console.log(this.precio_total)
            })
          }

          console.log("largo " + this.facturaLineas.length)
        })

      })
    this.service.getInfos().subscribe(data => {
      this.info = data;

      this.info_nombre = this.info[0].valor;
      this.info_direccion = this.info[3].valor + " " + this.info[4].valor + " " + this.info[5].valor + " " + this.info[6].valor + " " + this.info[7].valor + " ";
      this.info_email = this.info[11].valor;
      this.info_telefono = this.info[10].valor;
    });
  }

  VolverAGestion() {
    this.router.navigate(["gestionarReservas"]);
  }

}
