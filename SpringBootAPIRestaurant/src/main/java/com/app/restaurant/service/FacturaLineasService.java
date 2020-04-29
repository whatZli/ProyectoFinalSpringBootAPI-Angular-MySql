
package com.app.restaurant.service;

import java.util.List;

import com.app.restaurant.model.FacturaLineas;

public interface FacturaLineasService {
    List<FacturaLineas>listar();
    FacturaLineas listarId(int id);
    FacturaLineas add(FacturaLineas facturaLineas);
    FacturaLineas edit(FacturaLineas facturaLineas);
    FacturaLineas delete(int id);
    
    List<FacturaLineas> obtenerFacturasPorIDFactura(int id);
    
}
