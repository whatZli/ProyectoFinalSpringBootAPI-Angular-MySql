import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Trabajador } from 'src/app/Modelo/Trabajador';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './EditTrabajador.component.html',
  styleUrls: ['./EditTrabajador.component.css']
})
export class EditTrabajadorComponent implements OnInit {
  trabajador: Trabajador = new Trabajador();
  categoria = "Cocina";

  constructor(
    private router: Router,
    private service: ServiceService,
  ) { }

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("idTrabajador");
    this.service.getTrabajadorId(+id)
      .subscribe(data => {
        this.trabajador = data;
      })

  }
  Actualizar(trabajador: Trabajador) {
    this.service.updateTrabajador(trabajador)
      .subscribe(data => {
        this.trabajador = data;
        alert("Se va a actualizar el trabajador " + this.trabajador.nombre);
        this.router.navigate(["gestionarTrabajadores"]);
      })
  }

  selectChangeEstado(event: any) {
    //update the ui
    this.trabajador.estado = event.target.value;
  }

  selectChangeRango(event: any) {
    //update the ui
    this.trabajador.rango = event.target.value;
  }

  selectChangeCategoria(event: any) {
    //update the ui
    this.trabajador.categoria = event.target.value;
  }

  VolverAGestion() {
    this.router.navigate(["gestionarTrabajadores"]);
  }
}
