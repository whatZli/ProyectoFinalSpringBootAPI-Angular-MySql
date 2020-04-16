import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editproducto',
  templateUrl: './VerProducto.component.html',
  styleUrls: ['./VerProducto.component.css']
})
export class VerProductoComponent implements OnInit {


  producto:Producto=new Producto();

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Ver();
  }

  Ver(){
    let id=localStorage.getItem("idProducto");
    this.service.getProductoId(+id)
    .subscribe(data=>{
      this.producto=data;
    })

  }

  VolverAGestion() {
    this.router.navigate(["gestionarProducto"]);
  }
}
