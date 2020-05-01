import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Info } from 'src/app/Modelo/Info';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  infos: Info[];

  nombreRestaurante:String;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }


  cargarDatos() {
    this.service.getInfos().subscribe(data=>{
      this.nombreRestaurante= data[0].valor;
    })
  }
}
