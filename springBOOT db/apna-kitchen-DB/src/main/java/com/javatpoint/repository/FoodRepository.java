package com.javatpoint.repository;

import org.springframework.data.repository.CrudRepository;

import com.javatpoint.model.Food;

//repository that extends CrudRepository
public interface FoodRepository  extends CrudRepository<Food,Integer>{

}
