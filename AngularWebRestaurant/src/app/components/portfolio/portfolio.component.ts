import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  productos: Producto[];

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
