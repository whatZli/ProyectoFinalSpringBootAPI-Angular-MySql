
package com.app.restaurant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import com.app.restaurant.model.Factura;

public interface FacturaRepositorio extends Repository<Factura, Integer> {
	List<Factura> findAll();

	Factura findOne(int id);

	Factura save(Factura factura);

    @Query( "select o from Factura o where id_reserva=:id " )
	Factura obtenerFacturaPorIDReserva(@Param("id") int id);
}
