
package com.app.restaurant.service;

import java.util.List;

import com.app.restaurant.model.Trabajador;

public interface TrabajadorService {
    List<Trabajador>listar();
    Trabajador listarId(int id);
    Trabajador add(Trabajador trabajador);
    Trabajador edit(Trabajador trabajador);
    Trabajador delete(int id);
}
