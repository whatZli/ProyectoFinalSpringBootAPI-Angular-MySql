
package com.app.restaurant.serviceImp;

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
	public List<Reserva> listarReservasCliente(int id) {
    	return repositorio.findByClientId(id);
	}
    
    
    @Override
	public List<Reserva> listarHoy() {
		return repositorio.findByToday();
	}
    
	@Override
	public List<Reserva> listarPorFecha(String date) {
		return repositorio.findByFecha(date);
	}
	
	public List<Reserva> listarEntreFechas(String fecha1, String fecha2) {
		return repositorio.findByDateBetween(fecha1, fecha2);
	}

	

	
}
