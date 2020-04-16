
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

import com.app.restaurant.model.Cliente;
import com.app.restaurant.service.ClienteService;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600) //Para desarrollo
//@CrossOrigin(origins = "http://localhost",maxAge = 3600) //Para produccion para permitir la conexión desde angular
@RestController
@RequestMapping({"/cliente"})
public class ControladorCliente {
    
    @Autowired
    ClienteService ClienteService;
    
    @GetMapping
    public List<Cliente>listar(){
        return ClienteService.listar();
    }
    @PostMapping
    public Cliente agregar(@RequestBody Cliente cliente){
        return ClienteService.add(cliente);
    }
    @GetMapping(path = {"/{id}"})
    public Cliente listarId(@PathVariable("id")int id){
        return ClienteService.listarId(id);
    }
    @PutMapping(path = {"/{id}"})
    public Cliente editar(@RequestBody Cliente cliente,@PathVariable("id") int id){
        cliente.setId(id);
        return ClienteService.edit(cliente);
    }
    @DeleteMapping(path = {"/{id}"})
    public Cliente delete(@PathVariable("id") int  id){
        return ClienteService.delete(id);
    }
    
}
