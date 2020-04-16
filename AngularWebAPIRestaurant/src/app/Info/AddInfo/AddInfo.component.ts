import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Info } from 'src/app/Modelo/Info';

@Component({
  selector: 'app-add',
  templateUrl: './AddInfo.component.html',
  styleUrls: ['./AddInfo.component.css']
})
export class AddInfoComponent implements OnInit {

  info:Info=new Info();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createInfo(this.info)
    .subscribe(data=>{
      alert("Se añadirá el dato "+this.info.dato);
      this.router.navigate(["gestionarTrabajadores"]);
    })
  }

}
