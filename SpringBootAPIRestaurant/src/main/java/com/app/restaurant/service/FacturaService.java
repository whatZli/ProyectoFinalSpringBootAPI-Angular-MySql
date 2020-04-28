
package com.app.restaurant.service;

import java.util.List;

import com.app.restaurant.model.Factura;

public interface FacturaService {
    List<Factura>listar();
    Factura listarId(int id);
    Factura add(Factura factura);
}
