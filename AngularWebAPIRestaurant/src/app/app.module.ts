import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarTrabajadorComponent } from './Trabajador/ListarTrabajador/ListarTrabajador.component';
import { AddTrabajadorComponent } from './Trabajador/AddTrabajador/AddTrabajador.component';
import { EditTrabajadorComponent } from './Trabajador/EditTrabajador/EditTrabajador.component';
import { VerTrabajadorComponent } from './Trabajador/VerTrabajador/VerTrabajador.component';

import { ListarProductoComponent } from './Producto/ListarProducto/ListarProducto.component';
import { AddProductoComponent } from './Producto/AddProducto/AddProducto.component';
import { EditProductoComponent } from './Producto/EditProducto/EditProducto.component';
import { VerProductoComponent } from './Producto/VerProducto/VerProducto.component';

import { ListarInfoComponent } from './Info/Listar/ListarInfo.component';
import { AddInfoComponent } from './Info/AddInfo/AddInfo.component';
import { EditInfoComponent } from './Info/EditInfo/EditInfo.component';

//Cliente modules

import { ListarClienteComponent } from './Cliente/ListarCliente/ListarCliente.component';
import { AddClienteComponent } from './Cliente/AddCliente/AddCliente.component';
import { EditClienteComponent } from './Cliente/EditCliente/EditCliente.component';
import { VerClienteComponent } from './Cliente/VerCliente/VerCliente.component';

//Reserva modules

import { ListarReservaComponent } from './Reserva/ListarReserva/ListarReserva.component';
import { AddReservaComponent } from './Reserva/AddReserva/AddReserva.component';
import { EditReservaComponent } from './Reserva/EditReserva/EditReserva.component';
import { VerReservaComponent } from './Reserva/VerReserva/VerReserva.component';

import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,

    ListarTrabajadorComponent,
    AddTrabajadorComponent,
    EditTrabajadorComponent,
    VerTrabajadorComponent,
    
    ListarProductoComponent,
    AddProductoComponent,
    EditProductoComponent,
    VerProductoComponent,

    ListarInfoComponent,
    AddInfoComponent,
    EditInfoComponent,

    ListarClienteComponent,
    AddClienteComponent,
    EditClienteComponent,
    VerClienteComponent,

    ListarReservaComponent,
    AddReservaComponent,
    EditReservaComponent,
    VerReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
