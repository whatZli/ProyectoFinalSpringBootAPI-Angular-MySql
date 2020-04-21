import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {path:'gestionarTrabajadores',component:ListarTrabajadorComponent},
  {path:'addTrabajador',component:AddTrabajadorComponent},
  {path:'editTrabajador',component:EditTrabajadorComponent},
  {path:'verTrabajador',component:VerTrabajadorComponent},

  {path:'gestionarProducto',component:ListarProductoComponent},
  {path:'addProducto',component:AddProductoComponent},
  {path:'editProducto',component:EditProductoComponent},
  {path:'verProducto',component:VerProductoComponent},

  {path:'gestionarInfo',component:ListarInfoComponent},
  {path:'addInfo',component:AddInfoComponent},
  {path:'editInfo',component:EditInfoComponent},

  {path:'gestionarClientes',component:ListarClienteComponent},
  {path:'addCliente',component:AddClienteComponent},
  {path:'editCliente',component:EditClienteComponent},
  {path:'verCliente',component:VerClienteComponent},

  {path:'gestionarReservas',component:ListarReservaComponent},
  {path:'addReserva',component:AddReservaComponent},
  {path:'editReserva',component:EditReservaComponent},
  {path:'verReserva',component:VerReservaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
