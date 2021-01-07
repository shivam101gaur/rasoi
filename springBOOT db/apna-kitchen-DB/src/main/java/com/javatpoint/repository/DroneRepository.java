package com.javatpoint.repository;

import org.springframework.data.repository.CrudRepository;

import com.javatpoint.model.Drones;

public interface DroneRepository extends CrudRepository<Drones, Integer> {

}
