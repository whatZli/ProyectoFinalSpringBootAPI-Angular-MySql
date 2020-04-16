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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
