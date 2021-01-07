package com.javatpoint.repository;

import org.springframework.data.repository.CrudRepository;

import com.javatpoint.model.Orders;

public interface OrdersRepository extends CrudRepository<Orders, Integer> {

}
