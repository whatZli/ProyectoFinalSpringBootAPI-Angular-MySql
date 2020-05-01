import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/Modelo/Trabajador';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  trabajadores:Trabajador[];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {

    this.service.getTrabajadores().subscribe(data => {
      this.trabajadores = data;
    })
  }

}
