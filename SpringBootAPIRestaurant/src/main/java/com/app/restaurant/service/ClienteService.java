
package com.app.restaurant.service;

import java.util.List;

import com.app.restaurant.model.Cliente;

public interface ClienteService {
    List<Cliente>listar();
    Cliente listarId(int id);
    Cliente add(Cliente cliente);
    Cliente edit(Cliente cliente);
    Cliente delete(int id);
}
