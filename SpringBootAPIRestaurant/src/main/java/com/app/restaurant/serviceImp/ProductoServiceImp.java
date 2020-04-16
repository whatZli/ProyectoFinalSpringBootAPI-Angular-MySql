
package com.app.restaurant.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.restaurant.model.Producto;
import com.app.restaurant.repository.ProductoRepositorio;
import com.app.restaurant.service.ProductoService;

@Service
public class ProductoServiceImp implements ProductoService{
    @Autowired
    private ProductoRepositorio repositorio;
    
    @Override
    public List<Producto> listar() {
        return repositorio.findAll();
    }

    @Override
    public Producto listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public Producto add(Producto producto) {
        return repositorio.save(producto);
    }

    @Override
    public Producto edit(Producto producto) {
        return repositorio.save(producto);
    }

    @Override
    public Producto delete(int id) {
    	Producto producto=repositorio.findOne(id);
        if(producto!=null){
            repositorio.delete(producto);
        }
       return producto;
    }


}
