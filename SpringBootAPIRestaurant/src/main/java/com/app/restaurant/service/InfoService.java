
package com.app.restaurant.service;

import java.util.List;

import com.app.restaurant.model.Info;

public interface InfoService {
    List<Info>listar();
    Info listarId(int id);
    Info add(Info info);
    Info edit(Info info);
    Info delete(int id);
}
