
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

import com.app.restaurant.model.Info;
import com.app.restaurant.service.InfoService;

@CrossOrigin(origins  = "*", allowedHeaders ="*",maxAge = 3600) //Para permitir la conexión desde cualquier url
//@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600) //Para produccion para permitir la conexión desde angular
@RestController
@RequestMapping({"/info"})
public class ControladorInfo {
    
    @Autowired
    InfoService infoServiceDAO;
    
    @GetMapping
    public List<Info>listar(){
        return infoServiceDAO.listar();
    }
    @PostMapping
    public Info agregar(@RequestBody Info info){
        return infoServiceDAO.add(info);
    }
    @GetMapping(path = {"/{id}"})
    public Info listarId(@PathVariable("id")int id){
        return infoServiceDAO.listarId(id);
    }
    @PutMapping(path = {"/{id}"})
    public Info editar(@RequestBody Info info,@PathVariable("id") int id){
        info.setId(id);
        return infoServiceDAO.edit(info);
    }
    @DeleteMapping(path = {"/{id}"})
    public Info delete(@PathVariable("id") int  id){
        return infoServiceDAO.delete(id);
    }
    
}
