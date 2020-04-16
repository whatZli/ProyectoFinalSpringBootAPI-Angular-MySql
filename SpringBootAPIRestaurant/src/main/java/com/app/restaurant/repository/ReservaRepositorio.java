
package com.app.restaurant.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.app.restaurant.model.Reserva;

public interface ReservaRepositorio extends Repository<Reserva, Integer>{
    List<Reserva>findAll();
    Reserva findOne(int id);
    Reserva save(Reserva reserva);
    void delete(Reserva reserva);
    
    
    List<Reserva>findByFecha(String date);
}
