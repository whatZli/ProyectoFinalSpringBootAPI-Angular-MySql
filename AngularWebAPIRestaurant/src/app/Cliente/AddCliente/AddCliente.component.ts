import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-add',
  templateUrl: './AddCliente.component.html',
  styleUrls: ['./AddCliente.component.css']
})
export class AddClienteComponent implements OnInit {

  cliente:Cliente=new Cliente();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createCliente(this.cliente)
    .subscribe(data=>{
      alert("Se añadirá el cliente "+this.cliente.nombre);
      this.router.navigate(["gestionarClientes"]);
    })
  }

  VolverAGestion(){
    this.router.navigate(["gestionarClientes"]);
  }
}
