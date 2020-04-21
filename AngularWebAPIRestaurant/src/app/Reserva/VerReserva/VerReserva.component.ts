import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Reserva } from 'src/app/Modelo/Reserva';

@Component({
  selector: 'app-edit',
  templateUrl: './VerReserva.component.html',
  styleUrls: ['./VerReserva.component.css']
})
export class VerReservaComponent implements OnInit {

  reserva: Reserva = new Reserva();
  cliente: Cliente = new Cliente();


  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.Ver();
  }

  Ver() {
    let id = localStorage.getItem("idReserva");
    this.service.getReservaId(+id)
      .subscribe(data => {
        this.reserva = data;

        this.service.getClienteId(+this.reserva.id_cliente)
          .subscribe(data => {
            this.cliente = data;
          })
      })



  }

  VolverAGestion() {
    this.router.navigate(["gestionarReservas"]);
  }

}
