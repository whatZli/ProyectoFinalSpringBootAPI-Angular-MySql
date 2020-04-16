import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Trabajador } from 'src/app/Modelo/Trabajador';

@Component({
  selector: 'app-listar',
  templateUrl: './ListarTrabajador.component.html',
  styleUrls: ['./ListarTrabajador.component.css']
})
export class ListarTrabajadorComponent implements OnInit {

  trabajadores: Trabajador[];
  //chef:Chef; //Para pruebas
  //@ViewChild("element") element: ElementRef; //REFERENCIAMOS AL ELEMENTO QUE QUEREMOS MODIFICAR

  constructor(
    private service: ServiceService,
    private router: Router,
    //private renderer: Renderer2
    ) { }

  ngOnInit() {
    this.service.getTrabajadores()
      .subscribe(data => {
        this.trabajadores = data;
        //buscar en un Array de objetos un atributo concreto
        //this.trabajadores = data.find(trabajadores => trabajadores.id === 2);
        //console.log(data.find(trabajadores => trabajadores.id === 2));
        //console.log(this.trabajadores.id);
      });
      
  }

  NuevoTrabajador() {
    this.router.navigate(["addTrabajador"]);
  }

  Ver(trabajador: Trabajador): void {
    localStorage.setItem("idTrabajador", trabajador.id.toString());
    this.router.navigate(["verTrabajador"]);
  }

  Editar(trabajadores: Trabajador): void {
    localStorage.setItem("idTrabajador", trabajadores.id.toString());
    this.router.navigate(["editTrabajador"]);
  }

  Delete(trabajador: Trabajador) {
    this.service.deleteTrabajador(trabajador)
      .subscribe(data => {
        this.trabajadores = this.trabajadores.filter(p => p !== trabajador);
        alert("Se eliminará el trabajador seleccionado");
      })
  }

}
