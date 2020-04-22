import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editproducto',
  templateUrl: './editproducto.component.html',
  styleUrls: ['./editproducto.component.css']
})
export class EditProductoComponent implements OnInit {
  categoria=['Comida','Bebida','Otros'];

  producto:Producto=new Producto();

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("idProducto");
    this.service.getProductoId(+id)
    .subscribe(data=>{
      this.producto=data;
    })

  }
  Actualizar(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.producto=data;
      alert("Se va a actualizar el producto "+this.producto.nombre);
      this.router.navigate(["gestionarProducto"]);
    })
  }

  selectChangeCategoria(event: any) {
    //update the ui
    this.producto.categoria = event.target.value;
  }

  VolverAGestion() {
    this.router.navigate(["gestionarProducto"]);
  }
}
