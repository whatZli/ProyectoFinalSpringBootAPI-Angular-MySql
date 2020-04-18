import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-edit',
  templateUrl: './EditCliente.component.html',
  styleUrls: ['./EditCliente.component.css']
})
export class EditClienteComponent implements OnInit {

  cliente :Cliente=new Cliente();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("idCliente");
    this.service.getClienteId(+id)
    .subscribe(data=>{
      this.cliente=data;
    })

  }
  Actualizar(cliente:Cliente){
    this.service.updateCliente(cliente)
    .subscribe(data=>{
      this.cliente=data;
      alert("Se va a actualizar valor "+this.cliente.nombre);
      this.router.navigate(["gestionarClientes"]);
    })
  }

  VolverAGestion(){
    this.router.navigate(["gestionarClientes"]);
  }

}
