import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Reserva } from 'src/app/Modelo/Reserva';
import { Factura } from 'src/app/Modelo/Factura';
import { FacturaLineas } from 'src/app/Modelo/FacturaLineas';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-edit',
  templateUrl: './EditFactura.component.html',
  styleUrls: ['./EditFactura.component.css']
})
export class EditFacturaComponent implements OnInit {

  titulo: String = "";

  cliente: Cliente = new Cliente();
  reserva: Reserva = new Reserva();
  factura: Factura = new Factura();
  facturaLineas: FacturaLineas[];
  total_linea: String = "";
  facturaLinea: FacturaLineas = new FacturaLineas();
  productos: Producto[];
  productos_adquiridos: Producto[];
  producto: Producto = new Producto();
  cantidad: number = 0;
  form_visible_aniadir: boolean = false;
  form_visible_editar: boolean = false;
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {

    this.Ver();

  }

  Ver() {
    let id = localStorage.getItem("idReserva");
    this.service.getReservaId(+id)
      .subscribe(data => {
        this.reserva = data;
        console.log(this.reserva.id)
        this.service.getFacturaPorIDReserva(this.reserva.id).subscribe(data2 => {
          this.factura = data2;
          console.log(this.factura)
          this.service.getFacturaLineasPorIDFactura(this.factura.id).subscribe(data3 => {
            this.facturaLineas = data3;
            this.productos_adquiridos = [];//Vaciar el array de productos antes de llenarlo
            for (let i = 0; i < data3.length; i++) {
              this.service.getProductoId(this.facturaLineas[i].id_producto).subscribe(data => {
                this.productos_adquiridos[i] = data;
                this.total_linea = Number(this.productos_adquiridos[i].precio * this.facturaLineas[i].cantidad).toFixed(2);
              })
            }
            console.log(this.facturaLineas)
          });
        });
      })

  }

  AniadirProducto() {
    this.form_visible_editar = false;
    this.titulo = " añadir producto";
    this.service.getProductos().subscribe(data => {
      this.productos = data;
      console.log(data)
    });
    this.Ver();
    this.form_visible_aniadir = true;
  }

  EditarProducto(id_factura_linea, cantidad) {
    this.form_visible_aniadir = false;
    this.titulo = " editar producto";
    this.service.getProductos().subscribe(data => {
      this.productos = data;
      console.log(data)
    });
    this.service.getFacturaLineasId(id_factura_linea).subscribe(data => {
      this.facturaLinea.id = data.id;
      this.facturaLinea.id_factura = data.id_factura;
      this.facturaLinea.id_producto = data.id_producto;
    })
    this.facturaLinea.cantidad = cantidad;
    console.log(this.facturaLinea)
    this.service.updateFacturaLineas(this.facturaLinea).subscribe();
    this.form_visible_editar = true;
  }

  BorrarProducto(id_factura_linea) {
    this.service.getFacturaLineasId(id_factura_linea).subscribe(data => {
      this.facturaLinea.id = data.id;
      this.facturaLinea.id_factura = data.id_factura;
      this.facturaLinea.id_producto = data.id_producto;
      this.facturaLinea.cantidad = data.cantidad;

      this.service.deleteFacturaLineas(this.facturaLinea).subscribe(data => {
        this.facturaLineas = this.facturaLineas.filter(p => p !== this.facturaLinea);
        this.Ver()
      });
    })
    
    ;

  }

  Salir() {
    this.form_visible_aniadir = false;
    this.form_visible_editar = false;
  }

  selectChangeProducto(event: any) {
    let valorCompleto = event.target.value;
    valorCompleto = valorCompleto.split("-");
    //update the ui
    this.facturaLinea.id_producto = valorCompleto[0];
    console.log(event.target.value);
  }

  Guardar(facturaLinea: FacturaLineas) {
    facturaLinea.id_factura = this.factura.id;
    this.service.createFacturaLineas(facturaLinea).subscribe();
    console.log(facturaLinea);
    this.ngOnInit();
  }

  ModificarLinea(facturaLinea: FacturaLineas) {

    console.log(facturaLinea);
    facturaLinea.id_factura = this.factura.id;

    this.service.updateFacturaLineas(facturaLinea).subscribe();
    this.ngOnInit();
  }

  VolverAGestion() {
    this.router.navigate(["gestionarReservas"]);
  }

}
