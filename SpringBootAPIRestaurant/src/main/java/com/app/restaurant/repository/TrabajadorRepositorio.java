
package com.app.restaurant.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.app.restaurant.model.Trabajador;

public interface TrabajadorRepositorio extends Repository<Trabajador, Integer>{
    List<Trabajador>findAll();
    Trabajador findOne(int id);
    Trabajador save(Trabajador trabajador);
    void delete(Trabajador trabajador);
}
