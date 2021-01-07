package com.javatpoint.repository;

import org.springframework.data.repository.CrudRepository;

import com.javatpoint.model.Chef;

public interface ChefRepository extends CrudRepository<Chef, Integer> {

}
