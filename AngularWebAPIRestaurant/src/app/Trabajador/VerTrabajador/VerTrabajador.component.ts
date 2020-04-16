import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Trabajador } from 'src/app/Modelo/Trabajador';


@Component({
  selector: 'app-verTrabajador',
  templateUrl: './VerTrabajador.component.html',
  styleUrls: ['./VerTrabajador.component.css']
})
export class VerTrabajadorComponent implements OnInit {

  trabajador :Trabajador=new Trabajador();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Ver();
  }

  Ver(){
    let id=localStorage.getItem("idTrabajador");
    this.service.getTrabajadorId(+id)
    .subscribe(data=>{
      this.trabajador=data;
    })

  }

  VolverAGestion() {
    this.router.navigate(["gestionarTrabajadores"]);
  }

}
