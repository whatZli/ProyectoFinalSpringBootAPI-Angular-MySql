
package com.app.restaurant.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.restaurant.model.Info;
import com.app.restaurant.repository.InfoRepositorio;
import com.app.restaurant.service.InfoService;

@Service
public class InfoServiceImp implements InfoService{
    @Autowired
    private InfoRepositorio repositorio;
    
    @Override
    public List<Info> listar() {
        return repositorio.findAll();
    }

    @Override
    public Info listarId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public Info add(Info info) {
        return repositorio.save(info);
    }

    @Override
    public Info edit(Info info) {
        return repositorio.save(info);
    }

    @Override
    public Info delete(int id) {
    	Info info=repositorio.findOne(id);
        if(info!=null){
            repositorio.delete(info);
        }
       return info;
    }
}
