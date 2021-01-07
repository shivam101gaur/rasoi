package com.javatpoint.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javatpoint.model.Customer;
import com.javatpoint.service.CustomersService;

@CrossOrigin(origins="http://localhost:4200")

@RestController
public class customerContoller {

	@Autowired
	private CustomersService customersService;
	//creating a get mapping that retrieves all the customers detail from the database
	@GetMapping("customer")
	private List<Customer> getAllCustomers()
	{
		return customersService.getAllCustomers();
	}
	//creating a get mapping that retrieves the detail of a specific customer
		 @GetMapping("/customer/{customerid}")
		 private Customer getCustomers(@PathVariable("customerid") int customerid)
		 {
		 return customersService.getCustomersById(customerid);
		 }
		 
	//getting customized customers
		 @GetMapping("/customer/{key}/{value}")
		 private  List<Customer> getFilteredCustomer(@PathVariable("key") String key,@PathVariable("value") String value){
				return customersService.getFilteredCustomer(key,value);
			}
		 
		//creating a delete mapping that deletes a specified customer
		 @DeleteMapping("/customer/{customerid}")
		 private void deleteCustomer(@PathVariable("customerid") int customerid)
		 {
		 customersService.delete(customerid);
		 }
		 
		//creating post mapping that post the customer detail in the database
		 @PostMapping("/customer")
		 private int saveBook(@RequestBody Customer customers)
		 {
		 customersService.saveOrUpdate(customers);
		 return customers.getId();
		 }
		 
		 //creating put mapping that updates the customer detail
		 @PutMapping("/customer")
		 private Customer update(@RequestBody Customer customers)
		 {
		 customersService.saveOrUpdate(customers);
		 return customers;
		 }
}
