
package com.app.restaurant.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.app.restaurant.model.Producto;

public interface ProductoRepositorio extends Repository<Producto, Integer>{
    List<Producto>findAll();
    Producto findOne(int id);
    Producto save(Producto producto);
    void delete(Producto producto);
}
