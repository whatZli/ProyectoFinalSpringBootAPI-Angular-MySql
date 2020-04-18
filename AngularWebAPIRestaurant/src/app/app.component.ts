import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  title = 'Restaurante App';//Variable título de la web

  constructor(private router:Router){}
  

  Inicio(){
    this.router.navigate([""]);
  }

  GestionarTrabajadores(){
    this.router.navigate(["gestionarTrabajadores"]);
  }
  
  NuevoTrabajador(){
    this.router.navigate(["addTrabajador"]);
  }

  GestionarProducto(){
    this.router.navigate(["gestionarProducto"]);
  }
  NuevoProducto(){
    this.router.navigate(["addProducto"]);
  }

  GestionarInfo(){
    this.router.navigate(["gestionarInfo"]);
  }
  NuevaInfo(){
    this.router.navigate(["addInfo"]);
  }

  GestionarClientes(){
    this.router.navigate(["gestionarClientes"]);
  }
}
