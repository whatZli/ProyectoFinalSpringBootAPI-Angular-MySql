import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/Modelo/Info';
import { ServiceService } from 'src/app/service.service';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  infos: Info[];

  direccion1: String;
  direccion2: String;
  aperturaEntreSemana: String;
  aperturaFindes: String;

  email: String;
  telefono: String;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }


  cargarDatos() {
    this.service.getInfos().subscribe(data => {
      this.direccion1 = data[4].valor + " " + data[3].valor + " " + data[5].valor;
      this.direccion2 = data[6].valor + " " + data[7].valor;

      this.aperturaEntreSemana = data[8].valor;
      this.aperturaFindes = data[9].valor;

      this.email = data[11].valor;
      this.telefono=data[10].valor;
    })
  }
}
