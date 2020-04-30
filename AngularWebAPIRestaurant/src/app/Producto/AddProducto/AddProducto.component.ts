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
  categoria=['Comida','Bebida','Otros'];
  
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }
  selectChangeCategoria(event: any) {
    //update the ui
    this.producto.categoria = event.target.value;
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
