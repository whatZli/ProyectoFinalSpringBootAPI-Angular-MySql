
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

import com.app.restaurant.model.Trabajador;
import com.app.restaurant.service.TrabajadorService;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600) //Para desarrollo
//@CrossOrigin(origins = "http://localhost",maxAge = 3600) //Para produccion para permitir la conexión desde angular
@RestController
@RequestMapping({"/trabajador"})
public class ControladorTrabajador {
    
    @Autowired
    TrabajadorService trabajadorService;
    
    @GetMapping
    public List<Trabajador>listar(){
        return trabajadorService.listar();
    }
    @PostMapping
    public Trabajador agregar(@RequestBody Trabajador chef){
        return trabajadorService.add(chef);
    }
    @GetMapping(path = {"/{id}"})
    public Trabajador listarId(@PathVariable("id")int id){
        return trabajadorService.listarId(id);
    }
    @PutMapping(path = {"/{id}"})
    public Trabajador editar(@RequestBody Trabajador chef,@PathVariable("id") int id){
        chef.setId(id);
        return trabajadorService.edit(chef);
    }
    @DeleteMapping(path = {"/{id}"})
    public Trabajador delete(@PathVariable("id") int  id){
        return trabajadorService.delete(id);
    }
    
}
