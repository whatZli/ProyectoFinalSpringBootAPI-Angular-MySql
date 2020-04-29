import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Reserva } from 'src/app/Modelo/Reserva';
import { Factura } from 'src/app/Modelo/Factura';
import { FacturaLineas } from 'src/app/Modelo/FacturaLineas';

@Component({
  selector: 'app-edit',
  templateUrl: './EditFactura.component.html',
  styleUrls: ['./EditFactura.component.css']
})
export class EditFacturaComponent implements OnInit {

  titulo:String="";

  cliente: Cliente = new Cliente();
  reserva: Reserva = new Reserva();
  factura: Factura = new Factura();
  facturaLineas: FacturaLineas[];

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {

    this.Ver();

  }

  Ver() {
    let id = localStorage.getItem("idReserva");
    this.service.getReservaId(+id)
      .subscribe(data => {
        this.reserva = data;
        console.log(this.reserva.id)
        this.service.getFacturaPorIDReserva(this.reserva.id).subscribe(data2 => {
          this.factura = data2;
          console.log(this.factura)
          this.service.getFacturaLineasPorIDFactura(this.factura.id).subscribe(data3 => {
            this.facturaLineas = data3;
            console.log(this.facturaLineas)
          });
        });
      })

  }

  AniadirProducto(){
    this.titulo=" añadir producto"
  }

  EditarProducto(){
    this.titulo=" editar producto"
  }

  VolverAGestion() {
    this.router.navigate(["gestionarReservas"]);
  }

}
