
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
import com.app.restaurant.model.FacturaLineas;
import com.app.restaurant.service.FacturaLineasService;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600) //Para desarrollo
//@CrossOrigin(origins = "http://localhost",maxAge = 3600) //Para produccion para permitir la conexión desde angular
@RestController
@RequestMapping({"/facturaLineas"})
public class ControladorFacturaLineas {
    
    @Autowired
    FacturaLineasService facturaLineasServiceDAO;
    
    @GetMapping
    public List<FacturaLineas>listar(){
        return facturaLineasServiceDAO.listar();
    }
    @PostMapping
    public FacturaLineas agregar(@RequestBody FacturaLineas facturaLineas){
        return facturaLineasServiceDAO.add(facturaLineas);
    }
    @GetMapping(path = {"/{id}"})
    public FacturaLineas listarId(@PathVariable("id")int id){
        return facturaLineasServiceDAO.listarId(id);
    }
    @PutMapping(path = {"/{id}"})
    public FacturaLineas editar(@RequestBody FacturaLineas facturaLineas,@PathVariable("id") int id){
    	facturaLineas.setId(id);
        return facturaLineasServiceDAO.edit(facturaLineas);
    }
    @DeleteMapping(path = {"/{id}"})
    public FacturaLineas delete(@PathVariable("id") int  id){
        return facturaLineasServiceDAO.delete(id);
    }
    
    /*---------------------------------------------------------*/
    //Obtener una linea de factura filtrando por el ID de la factura
    @GetMapping(path = {"/factura/{id}"})
    public List<FacturaLineas> obtenerFacturasPorIDFactura(@PathVariable("id")int id){
        return facturaLineasServiceDAO.obtenerFacturasPorIDFactura(id);
    }

}
