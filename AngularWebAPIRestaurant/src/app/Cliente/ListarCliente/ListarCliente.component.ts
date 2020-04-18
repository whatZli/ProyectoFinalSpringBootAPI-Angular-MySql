import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './ListarCliente.component.html',
  styleUrls: ['./ListarCliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes: Cliente[];
  
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getClientes()
      .subscribe(data => {
        this.clientes = data;
      });
  }
  
  Nuevo(){
    this.router.navigate(["addCliente"]);
  }

  Ver(cliente:Cliente):void{
    localStorage.setItem("idCliente",cliente.id.toString());
    this.router.navigate(["verCliente"]);
  }

  Editar(cliente:Cliente):void{
    localStorage.setItem("idCliente",cliente.id.toString());
    this.router.navigate(["editCliente"]);
  }

  Delete(cliente:Cliente){
    this.service.deleteCliente(cliente)
    .subscribe(data=>{
      this.clientes=this.clientes.filter(p=>p!==cliente);
      alert("Se eliminará el cliente seleccionado");
    })
  }

}
