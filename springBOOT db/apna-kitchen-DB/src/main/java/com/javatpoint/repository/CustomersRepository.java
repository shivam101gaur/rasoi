package com.javatpoint.repository;

import org.springframework.data.repository.CrudRepository;
import com.javatpoint.model.Customer;

//repository that extends CrudRepository
public interface CustomersRepository extends CrudRepository<Customer, Integer> {

}
