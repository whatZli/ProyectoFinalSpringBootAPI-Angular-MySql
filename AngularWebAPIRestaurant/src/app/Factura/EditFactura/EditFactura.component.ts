import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Reserva } from 'src/app/Modelo/Reserva';

@Component({
  selector: 'app-edit',
  templateUrl: './EditFactura.component.html',
  styleUrls: ['./EditFactura.component.css']
})
export class EditFacturaComponent implements OnInit {

  cliente :Cliente=new Cliente();
  reservas :Reserva[];

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {

    this.Ver();
    this.ObtenerListadoDeReservasDelCliente();

  }

  Ver(){
    let id=localStorage.getItem("idCliente");
    this.service.getClienteId(+id)
    .subscribe(data=>{
      this.cliente=data;
    })

  }

  VolverAGestion(){
    this.router.navigate(["gestionarClientes"]);
  }

  ObtenerListadoDeReservasDelCliente(){
    let id=localStorage.getItem("idCliente");
    this.service.getReservasCliente(+id)
    .subscribe(data=>{
      this.reservas=data;
      console.log(this.reservas);
    })
  }
}
