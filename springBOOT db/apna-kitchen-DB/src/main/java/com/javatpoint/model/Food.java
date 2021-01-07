package com.javatpoint.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Food {
	
	@Id
	@Column
	private int id;
	@Column
	private String dish;
	@Column
	private int price;
	@Column
	private int chefID;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDish() {
		return dish;
	}
	public void setDish(String dish) {
		this.dish = dish;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getChefID() {
		return chefID;
	}
	public void setChefID(int chefID) {
		this.chefID = chefID;
	}
	
	
	
	

}
