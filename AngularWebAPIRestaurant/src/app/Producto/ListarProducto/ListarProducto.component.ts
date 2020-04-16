import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarplato',
  templateUrl: './ListarProducto.component.html',
  styleUrls: ['./ListarProducto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos: Producto[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getProductos()
      .subscribe(data => {
        this.productos = data;
      });
  }
  NuevoProducto(){
    this.router.navigate(["addProducto"]);
  }

  VerProducto(producto: Producto): void {
    localStorage.setItem("idProducto", producto.id.toString());
    this.router.navigate(["verProducto"]);
  }

  EditarProducto(producto:Producto):void{
    localStorage.setItem("idProducto",producto.id.toString());
    this.router.navigate(["editProducto"]);
  }

  DeleteProducto(producto:Producto){
    this.service.deleteProducto(producto)
    .subscribe(data=>{
      this.productos=this.productos.filter(p=>p!==producto);
      alert("Se eliminará el producto seleccionado");
    })
  }

}
