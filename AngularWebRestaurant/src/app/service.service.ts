import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajador } from './Modelo/Trabajador';
import { Producto } from './Modelo/Producto';
import { Info } from './Modelo/Info';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  Url = 'http://localhost:8080/webServiceRestaurant';

  //Métodos para los trabajadores
  getTrabajadores() {
    return this.http.get<Trabajador[]>(this.Url + "/trabajador");
  }

  getProductos() {
    return this.http.get<Producto[]>(this.Url + "/producto");
  }

  getInfos() {
    return this.http.get<Info[]>(this.Url + "/info");
  }

  
}
