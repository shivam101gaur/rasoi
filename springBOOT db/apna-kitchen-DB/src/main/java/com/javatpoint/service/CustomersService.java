package com.javatpoint.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatpoint.model.Customer;
import com.javatpoint.repository.CustomersRepository;

import aj.org.objectweb.asm.Type;


@Service
public class CustomersService {
	@Autowired
	CustomersRepository customersRepository;
	//getting all books record by using the method findAll() of CrudRepository
	public List<Customer> getAllCustomers()
	  {
	  List<Customer> customers = new ArrayList<Customer>();
	  customersRepository.findAll().forEach(customer -> customers.add(customer));
	  System.out.print(23);
	  return customers; 
	  }
	
	
	public List<Customer> getFilteredCustomer(String key, String value) {
		List<Customer> customers = new ArrayList<Customer>();
		  customersRepository.findAll().forEach((customer) -> {	  
		switch(key) 
		{
			case "name":
				{
				if(customer.getName().toString().intern()==(value).toString().intern())
				  {  customers.add(customer);   }	
				break;
				}
			case "session":
				{
				if(customer.isSession()==Boolean.valueOf(value)) 
				{  customers.add(customer);   }
					break;			
				}	
			default:
				{ System.out.print("invalid key in path ");	return; }		
		 }	  
	  });
	return customers; 
	}
	
	
	//getting a specific record by using the method findById() of CrudRepository
	  public Customer getCustomersById(int id)
	  {
	  return customersRepository.findById(id).get();
	  }
	 
	  
	  
	  //saving a specific record by using the method save() of CrudRepository
	  public void saveOrUpdate(Customer customers)
	  {
	  customersRepository.save(customers);
	  }
	  //deleting a specific record by using the method deleteById() of CrudRepository
	  public void delete(int id)
	  {
	  customersRepository.deleteById(id);
	  }
	  //updating a record
	  public void update(Customer customers, int customerid)
	  {
	  customersRepository.save(customers);
      }

}
