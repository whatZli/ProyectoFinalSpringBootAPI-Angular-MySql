import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-edit',
  templateUrl: './VerCliente.component.html',
  styleUrls: ['./VerCliente.component.css']
})
export class VerClienteComponent implements OnInit {

  cliente :Cliente=new Cliente();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Ver();
    
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

  /*ObtenerListadoDeReservasDelCliente(){
    this.service.getReservasCliente(+id)
    .subscribe(data=>{
      this.cliente=data;
    })
  }*/
}
