
package com.app.restaurant.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.restaurant.model.FacturaLineas;
import com.app.restaurant.repository.FacturaLineasRepositorio;
import com.app.restaurant.service.FacturaLineasService;

@Service
public class FacturaLineasServiceImp implements FacturaLineasService{
    @Autowired
    private FacturaLineasRepositorio repositorio;
    
    @Override
    public List<FacturaLineas> listar() {
        return repositorio.findAll();
    }

    @Override
    public FacturaLineas listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public FacturaLineas add(FacturaLineas facturaLineas) {
        return repositorio.save(facturaLineas);
    }

    @Override
    public FacturaLineas edit(FacturaLineas facturaLineas) {
        return repositorio.save(facturaLineas);
    }

    @Override
    public FacturaLineas delete(int id) {
    	FacturaLineas facturaLineas=repositorio.findOne(id);
        if(facturaLineas!=null){
            repositorio.delete(facturaLineas);
        }
       return facturaLineas;
    }


}
