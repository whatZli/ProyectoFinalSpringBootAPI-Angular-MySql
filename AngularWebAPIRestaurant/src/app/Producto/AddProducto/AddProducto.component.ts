import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.component.html',
  styleUrls: ['./addproducto.component.css']
})
export class AddProductoComponent implements OnInit {

  producto:Producto=new Producto();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  GuardarProducto(){
    this.service.createProducto(this.producto)
    .subscribe(data=>{
      alert("Se añadirá el producto: "+this.producto.nombre);
      this.router.navigate(["gestionarProducto"]);
    })
  }
  VolverAGestion(){
    this.router.navigate(["gestionarProducto"])
  }

}
