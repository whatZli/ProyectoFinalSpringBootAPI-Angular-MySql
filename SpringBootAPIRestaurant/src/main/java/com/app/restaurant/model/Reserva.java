package com.app.restaurant.model;


import javax.persistence.*;

@Entity
@Table(name = "reserva")
public class Reserva {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String fecha;
    @Column
    private String hora;
    @Column
    private int personas;
    @Column
    private int id_cliente;
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	public String getHora() {
		return hora;
	}
	public void setHora(String hora) {
		this.hora = hora;
	}
	public int getPersonas() {
		return personas;
	}
	public void setPersonas(int personas) {
		this.personas = personas;
	}
	public int getId_cliente() {
		return id_cliente;
	}
	public void setId_cliente(int id_cliente) {
		this.id_cliente = id_cliente;
	}
    

	
}
