import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Info } from 'src/app/Modelo/Info';

@Component({
  selector: 'app-listar',
  templateUrl: './ListarInfo.component.html',
  styleUrls: ['./ListarInfo.component.css']
})
export class ListarInfoComponent implements OnInit {

  infos: Info[];
  
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getInfos()
      .subscribe(data => {
        this.infos = data;
      });
  }
  
  Nuevo(){
    this.router.navigate(["addInfo"]);
  }
  Editar(info:Info):void{
    localStorage.setItem("idInfo",info.id.toString());
    this.router.navigate(["editInfo"]);
  }

  Delete(info:Info){
    this.service.deleteInfo(info)
    .subscribe(data=>{
      this.infos=this.infos.filter(p=>p!==info);
      alert("Se eliminará la información seleccionada");
    })
  }

}
