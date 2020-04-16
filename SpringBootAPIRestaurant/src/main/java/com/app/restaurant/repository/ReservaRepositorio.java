
package com.app.restaurant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import com.app.restaurant.model.Reserva;

public interface ReservaRepositorio extends Repository<Reserva, Integer>{
    List<Reserva>findAll();
    Reserva findOne(int id);
    Reserva save(Reserva reserva);
    void delete(Reserva reserva);
    
    
    List<Reserva>findByFecha(String date);


    @Query( "select o from Reserva o where fecha between :fecha1 and :fecha2" )
    List<Reserva> findByDateBetween(@Param("fecha1") String fecha1,@Param("fecha2") String fecha2);
}
