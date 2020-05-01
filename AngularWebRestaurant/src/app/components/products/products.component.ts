import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos: Producto[];

  comidas: Producto[];
  bebidas: Producto[];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {

    this.service.getProductos().subscribe(data => {
      this.productos = data;
    })
  }

}
