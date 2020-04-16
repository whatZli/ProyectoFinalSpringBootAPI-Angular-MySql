
package com.app.restaurant.serviceImp;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.restaurant.model.Reserva;
import com.app.restaurant.repository.ReservaRepositorio;
import com.app.restaurant.service.ReservaService;

@Service
public class ReservaServiceImp implements ReservaService{
    @Autowired
    private ReservaRepositorio repositorio;
    
    @Override
    public List<Reserva> listar() {
        return repositorio.findAll();
    }

    @Override
    public Reserva listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public Reserva add(Reserva reserva) {
        return repositorio.save(reserva);
    }

    @Override
    public Reserva edit(Reserva reserva) {
        return repositorio.save(reserva);
    }

    @Override
    public Reserva delete(int id) {
    	Reserva reserva=repositorio.findOne(id);
        if(reserva!=null){
            repositorio.delete(reserva);
        }
       return reserva;
    }

	@Override
	public List<Reserva> listarPorFecha(String date) {
		return repositorio.findByFecha(date);
	}
}
