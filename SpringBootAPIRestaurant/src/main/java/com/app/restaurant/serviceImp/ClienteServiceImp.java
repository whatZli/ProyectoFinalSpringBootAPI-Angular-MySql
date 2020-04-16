
package com.app.restaurant.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.restaurant.model.Cliente;
import com.app.restaurant.repository.ClienteRepositorio;
import com.app.restaurant.service.ClienteService;

@Service
public class ClienteServiceImp implements ClienteService{
    @Autowired
    private ClienteRepositorio repositorio;
    
    @Override
    public List<Cliente> listar() {
        return repositorio.findAll();
    }

    @Override
    public Cliente listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public Cliente add(Cliente cliente) {
        return repositorio.save(cliente);
    }

    @Override
    public Cliente edit(Cliente cliente) {
        return repositorio.save(cliente);
    }

    @Override
    public Cliente delete(int id) {
    	Cliente cliente=repositorio.findOne(id);
        if(cliente!=null){
            repositorio.delete(cliente);
        }
       return cliente;
    }
}
