
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

import com.app.restaurant.model.Reserva;
import com.app.restaurant.service.ReservaService;
import com.app.restaurant.service.ClienteService;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600) //Para desarrollo
//@CrossOrigin(origins = "http://localhost",maxAge = 3600) //Para produccion para permitir la conexión desde angular
@RestController
@RequestMapping({"/reserva"})
public class ControladorReserva {
    
    @Autowired
    ReservaService ReservaService;
    ClienteService ClienteService;
    
    @GetMapping
    public List<Reserva>listar(){
        return ReservaService.listar();
    }
    @PostMapping
    public Reserva agregar(@RequestBody Reserva reserva){
        return ReservaService.add(reserva);
    }
    @GetMapping(path = {"/{id}"})
    public Reserva listarId(@PathVariable("id")int id){
        return ReservaService.listarId(id);
    }
    @PutMapping(path = {"/{id}"})
    public Reserva editar(@RequestBody Reserva reserva,@PathVariable("id") int id){
    	reserva.setId(id);
        return ReservaService.edit(reserva);
    }
    @DeleteMapping(path = {"/{id}"})
    public Reserva delete(@PathVariable("id") int  id){
        return ReservaService.delete(id);
    }
    
    /*---------------------------------------------------------*/
    
    @GetMapping(path = {"/consulta_hoy"})
    public List<Reserva> reservasHoy(){
		try
	       {
	    	return ReservaService.listarHoy();
	       }
	       catch(ArrayIndexOutOfBoundsException e)
	       {
	    	   return null;
	       }
    }
    
	@GetMapping(path = {"/consulta_fecha/{fecha}"})
    public List<Reserva> reservasEnUnaFecha(@PathVariable("fecha")String fecha){
		try
	       {
	    	return ReservaService.listarPorFecha(fecha);
	       }
	       catch(ArrayIndexOutOfBoundsException e)
	       {
	    	   return null;
	       }
    }
	
	@GetMapping(path = {"/consulta_entre_fechas/{fechas}"})
    public List<Reserva> reservasEntreFechas(@PathVariable("fechas")String fechas){
		String fechaSplit[]=fechas.split("&");
		
		String fecha1=fechaSplit[0];
		String fecha2=fechaSplit[1];
		try
	       {
	    	return ReservaService.listarEntreFechas(fecha1,fecha2);
	       }
	       catch(ArrayIndexOutOfBoundsException e)
	       {
	    	   return null;
	       }
    }
    
}
