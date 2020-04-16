import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Info } from 'src/app/Modelo/Info';

@Component({
  selector: 'app-edit',
  templateUrl: './EditInfo.component.html',
  styleUrls: ['./EditInfo.component.css']
})
export class EditInfoComponent implements OnInit {

  info :Info=new Info();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("idInfo");
    this.service.getInfoId(+id)
    .subscribe(data=>{
      this.info=data;
    })

  }
  Actualizar(info:Info){
    this.service.updateInfo(info)
    .subscribe(data=>{
      this.info=data;
      alert("Se va a actualizar valor "+this.info.dato);
      this.router.navigate(["gestionarInfo"]);
    })
  }

}
