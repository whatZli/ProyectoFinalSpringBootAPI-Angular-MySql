
package com.app.restaurant.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.restaurant.model.Factura;
import com.app.restaurant.model.Reserva;
import com.app.restaurant.service.FacturaService;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600) //Para desarrollo
//@CrossOrigin(origins = "http://localhost",maxAge = 3600) //Para produccion para permitir la conexión desde angular
@RestController
@RequestMapping({"/factura"})
public class ControladorFactura {
    
    @Autowired
    FacturaService facturaServiceDAO;
    
    @GetMapping
    public List<Factura>listar(){
        return facturaServiceDAO.listar();
    }
    @PostMapping
    public Factura agregar(@RequestBody Factura factura){
        return facturaServiceDAO.add(factura);
    }
    @GetMapping(path = {"/{id}"})
    public Factura listarId(@PathVariable("id")int id){
        return facturaServiceDAO.listarId(id);
    }
    
    /*---------------------------------------------------------*/
    //Obtener una factura filtrando por el ID de la reserva
    @GetMapping(path = {"/reserva/{id}"})
    public Factura obtenerFacturaPorIDReserva(@PathVariable("id")int id){
        return facturaServiceDAO.obtenerFacturaPorIDReserva(id);
    }
    
}
