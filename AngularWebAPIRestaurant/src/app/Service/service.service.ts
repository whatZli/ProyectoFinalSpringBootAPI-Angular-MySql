import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajador } from '../Modelo/Trabajador';
import { Producto } from '../Modelo/Producto';
import { Info } from '../Modelo/Info';
import { Cliente } from '../Modelo/Cliente';
import { Reserva } from '../Modelo/Reserva';
import { Factura } from '../Modelo/Factura';
import { FacturaLineas } from '../Modelo/FacturaLineas';

@Injectable()
export class ServiceService {


  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/webServiceRestaurant';

  //Métodos para los trabajadores
  getTrabajadores() {
    return this.http.get<Trabajador[]>(this.Url + "/trabajador");
  }
  createTrabajador(trabajador: Trabajador) {
    return this.http.post<Trabajador>(this.Url + "/trabajador", trabajador);
  }
  getTrabajadorId(id: number) {
    return this.http.get<Trabajador>(this.Url + "/trabajador" + "/" + id);
  }
  updateTrabajador(trabajador: Trabajador) {
    return this.http.put<Trabajador>(this.Url + "/trabajador" + "/" + trabajador.id, trabajador);
  }
  deleteTrabajador(trabajador: Trabajador) {
    return this.http.delete<Trabajador>(this.Url + "/trabajador" + "/" + trabajador.id);
  }


  getProductos() {
    return this.http.get<Producto[]>(this.Url + "/producto");
  }
  createProducto(producto: Producto) {
    return this.http.post<Producto>(this.Url + "/producto", producto);
  }
  getProductoId(id: number) {
    return this.http.get<Producto>(this.Url + "/producto" + "/" + id);
  }
  updateProducto(producto: Producto) {
    return this.http.put<Producto>(this.Url + "/producto" + "/" + producto.id, producto);
  }
  deleteProducto(producto: Producto) {
    return this.http.delete<Producto>(this.Url + "/producto" + "/" + producto.id);
  }


  getInfos() {
    return this.http.get<Info[]>(this.Url + "/info");
  }
  createInfo(info: Info) {
    return this.http.post<Info>(this.Url + "/info", info);
  }
  getInfoId(id: number) {
    return this.http.get<Info>(this.Url + "/info" + "/" + id);
  }
  updateInfo(info: Info) {
    return this.http.put<Info>(this.Url + "/info" + "/" + info.id, info);
  }
  deleteInfo(info: Info) {
    return this.http.delete<Info>(this.Url + "/info" + "/" + info.id);
  }


  getClientes() {
    return this.http.get<Cliente[]>(this.Url + "/cliente");
  }
  createCliente(cliente: Cliente) {
    return this.http.post<Cliente>(this.Url + "/cliente", cliente);
  }
  getClienteId(id: number) {
    return this.http.get<Cliente>(this.Url + "/cliente" + "/" + id);
  }
  updateCliente(cliente: Cliente) {
    return this.http.put<Cliente>(this.Url + "/cliente" + "/" + cliente.id, cliente);
  }
  deleteCliente(cliente: Cliente) {
    return this.http.delete<Cliente>(this.Url + "/cliente" + "/" + cliente.id);
  }
  getReservasCliente(id: number) {
    return this.http.get<Reserva[]>(this.Url + "/reserva/cliente/" + id);
  }


  getReservas() {
    return this.http.get<Reserva[]>(this.Url + "/reserva");
  }
  getReservasHoy() {
    return this.http.get<Reserva[]>(this.Url + "/reserva/consulta_hoy");
  }
  getReservasFecha(fecha: String) {
    return this.http.get<Reserva[]>(this.Url + "/reserva/consulta_fecha/" + fecha);
  }
  getReservasEntreFechas(fecha1: String, fecha2: String) {
    return this.http.get<Reserva[]>(this.Url + "/reserva/consulta_entre_fechas/" + fecha1 + "&" + fecha2);
  }
  createReserva(reserva: Reserva) {
    return this.http.post<Reserva>(this.Url + "/reserva", reserva);
  }
  getReservaId(id: number) {
    return this.http.get<Reserva>(this.Url + "/reserva" + "/" + id);
  }
  updateReserva(reserva: Reserva) {
    return this.http.put<Reserva>(this.Url + "/reserva" + "/" + reserva.id, reserva);
  }
  deleteReserva(reserva: Reserva) {
    return this.http.delete<Reserva>(this.Url + "/reserva" + "/" + reserva.id);
  }

  //Facturas
  getFacturas() {
    return this.http.get<Factura[]>(this.Url + "/factura");
  }
  createFactura(factura: Factura) {
    return this.http.post<Factura>(this.Url + "/factura", factura);
  }
  getFacturaId(id: number) {
    return this.http.get<Factura>(this.Url + "/factura" + "/" + id);
  }


  //Lineas de factura
  getFacturaLineas() {
    return this.http.get<FacturaLineas[]>(this.Url + "/facturaLineas");
  }
  createFacturaLineas(facturaLineas: FacturaLineas) {
    return this.http.post<FacturaLineas>(this.Url + "/facturaLineas", facturaLineas);
  }
  getFacturaLineasId(id: number) {
    return this.http.get<FacturaLineas>(this.Url + "/facturaLineas" + "/" + id);
  }
  updateFacturaLineas(facturaLineas: FacturaLineas) {
    return this.http.put<FacturaLineas>(this.Url + "/facturaLineas" + "/" + facturaLineas.id, facturaLineas);
  }
  deleteFacturaLineas(facturaLineas: FacturaLineas) {
    return this.http.delete<FacturaLineas>(this.Url + "/facturaLineas" + "/" + facturaLineas.id);
  }
}
