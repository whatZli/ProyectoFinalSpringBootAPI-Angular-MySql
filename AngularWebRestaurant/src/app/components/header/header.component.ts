import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/Modelo/Info';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  infos: Info[];

  nombreRestaurante:String;
  descripcionCorta:String;
  descripcionLarga:String;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }


  cargarDatos() {
    this.service.getInfos().subscribe(data=>{
      this.infos=data;

      this.nombreRestaurante= data[0].valor;
      this.descripcionCorta=data[1].valor;
      this.descripcionLarga=data[2].valor;
    })
  }

}
