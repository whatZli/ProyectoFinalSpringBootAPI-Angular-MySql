
package com.app.restaurant.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.app.restaurant.model.Factura;

public interface FacturaRepositorio extends Repository<Factura, Integer>{
    List<Factura>findAll();
    Factura findOne(int id);
    Factura save(Factura factura);
   
}
