
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

import com.app.restaurant.model.Producto;
import com.app.restaurant.service.ProductoService;

@CrossOrigin(origins  = "*", allowedHeaders ="*",maxAge = 3600) //Para permitir la conexión desde cualquier url
//@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600) //Para produccion para permitir la conexión desde angular
@RestController
@RequestMapping({"/producto"})
public class ControladorProducto {
    
    @Autowired
    ProductoService productoService;
    
    @GetMapping
    public List<Producto>listar(){
        return productoService.listar();
    }
    @PostMapping
    public Producto agregar(@RequestBody Producto producto){
        return productoService.add(producto);
    }
    @GetMapping(path = {"/{id}"})
    public Producto listarId(@PathVariable("id")int id){
        return productoService.listarId(id);
    }
    @PutMapping(path = {"/{id}"})
    public Producto editar(@RequestBody Producto producto,@PathVariable("id") int id){
    	producto.setId(id);
        return productoService.edit(producto);
    }
    @DeleteMapping(path = {"/{id}"})
    public Producto delete(@PathVariable("id") int  id){
        return productoService.delete(id);
    }
    
}
