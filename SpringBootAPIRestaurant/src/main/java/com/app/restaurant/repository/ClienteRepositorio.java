
package com.app.restaurant.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.app.restaurant.model.Cliente;

public interface ClienteRepositorio extends Repository<Cliente, Integer>{
    List<Cliente>findAll();
    Cliente findOne(int id);
    Cliente save(Cliente cliente);
    void delete(Cliente cliente);
}
