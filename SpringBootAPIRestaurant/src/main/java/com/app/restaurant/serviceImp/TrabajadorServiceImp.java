
package com.app.restaurant.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.restaurant.model.Trabajador;
import com.app.restaurant.repository.TrabajadorRepositorio;
import com.app.restaurant.service.TrabajadorService;

@Service
public class TrabajadorServiceImp implements TrabajadorService{
    @Autowired
    private TrabajadorRepositorio repositorio;
    
    @Override
    public List<Trabajador> listar() {
        return repositorio.findAll();
    }

    @Override
    public Trabajador listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public Trabajador add(Trabajador trabajador) {
        return repositorio.save(trabajador);
    }

    @Override
    public Trabajador edit(Trabajador trabajador) {
        return repositorio.save(trabajador);
    }

    @Override
    public Trabajador delete(int id) {
    	Trabajador trabajador=repositorio.findOne(id);
        if(trabajador!=null){
            repositorio.delete(trabajador);
        }
       return trabajador;
    }
}
