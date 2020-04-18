
package com.app.restaurant.service;

import java.util.List;

import com.app.restaurant.model.Reserva;

public interface ReservaService {
    List<Reserva>listar();
    Reserva listarId(int id);
    Reserva add(Reserva reserva);
    Reserva edit(Reserva reserva);
    Reserva delete(int id);
    
    /*-------------*/
    List<Reserva>listarReservasCliente(int id);
    List<Reserva>listarHoy();
    List<Reserva>listarPorFecha(String date);
    List<Reserva>listarEntreFechas(String fecha1,String fecha2);
}
