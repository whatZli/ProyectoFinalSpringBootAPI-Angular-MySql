
package com.app.restaurant.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.app.restaurant.model.Info;

public interface InfoRepositorio extends Repository<Info, Integer>{
    List<Info>findAll();
    Info findOne(int id);
    Info save(Info info);
    void delete(Info info);
}
