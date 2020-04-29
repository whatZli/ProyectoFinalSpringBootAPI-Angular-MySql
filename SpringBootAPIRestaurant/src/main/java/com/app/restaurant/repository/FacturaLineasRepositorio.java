
package com.app.restaurant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import com.app.restaurant.model.FacturaLineas;

public interface FacturaLineasRepositorio extends Repository<FacturaLineas, Integer>{
    List<FacturaLineas>findAll();
    FacturaLineas findOne(int id);
    FacturaLineas save(FacturaLineas facturaLineas);
    void delete(FacturaLineas facturaLineas);
    
    @Query( "select o from FacturaLineas o where id_factura=:id " )
    List<FacturaLineas> obtenerFacturasPorIDFactura(@Param("id") int id);
}
