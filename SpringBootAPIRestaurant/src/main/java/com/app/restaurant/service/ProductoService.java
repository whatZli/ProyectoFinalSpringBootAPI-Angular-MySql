
package com.app.restaurant.service;

import java.util.List;

import com.app.restaurant.model.Producto;

public interface ProductoService {
    List<Producto>listar();
    Producto listarId(int id);
    Producto add(Producto producto);
    Producto edit(Producto producto);
    Producto delete(int id);
}
