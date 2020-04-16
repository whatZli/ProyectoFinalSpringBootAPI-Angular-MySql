import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajador } from '../Modelo/Trabajador';
import { Producto } from '../Modelo/Producto';
import { Info } from '../Modelo/Info';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/webServiceRestaurant';

  //Métodos para los trabajadores
  getTrabajadores(){
    return this.http.get<Trabajador[]>(this.Url+"/trabajador");
  }
  createTrabajador(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.Url+"/trabajador",trabajador);
  }
  getTrabajadorId(id:number){
    return this.http.get<Trabajador>(this.Url+"/trabajador"+"/"+id);
  }
  updateTrabajador(trabajador:Trabajador){
    return this.http.put<Trabajador>(this.Url+"/trabajador"+"/"+trabajador.id,trabajador);
  }
  deleteTrabajador(trabajador:Trabajador){
    return this.http.delete<Trabajador>(this.Url+"/trabajador"+"/"+trabajador.id);
  }


  getProductos(){
    return this.http.get<Producto[]>(this.Url+"/producto");
  }
  createProducto(producto:Producto){
    return this.http.post<Producto>(this.Url+"/producto",producto);
  }
  getProductoId(id:number){
    return this.http.get<Producto>(this.Url+"/producto"+"/"+id);
  }
  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.Url+"/producto"+"/"+producto.id,producto);
  }
  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url+"/producto"+"/"+producto.id);
  }


  getInfos(){
    return this.http.get<Info[]>(this.Url+"/info");
  }
  createInfo(info:Info){
    return this.http.post<Info>(this.Url+"/info",info);
  }
  getInfoId(id:number){
    return this.http.get<Info>(this.Url+"/info"+"/"+id);
  }
  updateInfo(info:Info){
    return this.http.put<Info>(this.Url+"/info"+"/"+info.id,info);
  }
  deleteInfo(info:Info){
    return this.http.delete<Info>(this.Url+"/info"+"/"+info.id);
  }
}