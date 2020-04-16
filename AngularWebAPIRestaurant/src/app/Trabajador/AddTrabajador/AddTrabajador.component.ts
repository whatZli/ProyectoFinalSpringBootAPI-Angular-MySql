import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Trabajador } from 'src/app/Modelo/Trabajador';

@Component({
  selector: 'app-add',
  templateUrl: './AddTrabajador.component.html',
  styleUrls: ['./AddTrabajador.component.css']
})
export class AddTrabajadorComponent implements OnInit {

  trabajador:Trabajador=new Trabajador();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createTrabajador(this.trabajador)
    .subscribe(data=>{
      console.log("Se añadirá el trabajador "+this.trabajador.nombre+" "+this.trabajador.apellidos);
      this.router.navigate(["gestionarTrabajadores"]);
    })
  }
  VolverAGestion(){
    this.router.navigate(["gestionarTrabajadores"]);
  }

  selectChangeEstado (event: any) {
    //update the ui
    this.trabajador.estado = event.target.value;
  }

  selectChangeRango (event: any) {
    //update the ui
    this.trabajador.rango = event.target.value;
  }

  selectChangeCategoria (event: any) {
    //update the ui
    this.trabajador.categoria = event.target.value;
  }
  

}
