
package com.app.restaurant.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.restaurant.model.Factura;
import com.app.restaurant.repository.FacturaRepositorio;
import com.app.restaurant.service.FacturaService;

@Service
public class FacturaServiceImp implements FacturaService{
    @Autowired
    private FacturaRepositorio repositorio;
    
    @Override
    public List<Factura> listar() {
        return repositorio.findAll();
    }

    @Override
    public Factura listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public Factura add(Factura factura) {
        return repositorio.save(factura);
    }


	

	
}
