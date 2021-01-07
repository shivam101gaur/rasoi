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
import com.javatpoint.model.Orders;
import com.javatpoint.service.OrdersService;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class orderController {
	
	@Autowired
	private OrdersService ordersService;
	//creating a get mapping that retrieves all the chef detail from the database
	@GetMapping("orders")
	private List<Orders> getAllOrder(){
		return ordersService.getAllOrder();
	}
	
	//getting customized orders
	 @GetMapping("/orders/{key}/{value}")
	 private  List<Orders> getFilteredCustomer(@PathVariable("key") String key,@PathVariable("value") String value){
			return ordersService.getFilteredOrders(key,value);
		}
	
	//creating a get mapping that retrieves the detail of a specific chef
		@GetMapping("/orders/{orderid}")
		 private Orders getOrder(@PathVariable("orderid") int orderid)
		 {
		 return ordersService.getOrderById(orderid);
		 }
		
		//creating a delete mapping that deletes a specified chef
				@DeleteMapping("/orders/{orderid}")
				 private void deleteOrder(@PathVariable("orderid") int orderid)
				 {
				 ordersService.delete(orderid);
				 }
				
	//creating post mapping that post the chef detail in the database
				 @PostMapping("/orders")
				 private int saveOrder(@RequestBody Orders order)
				 {
				 ordersService.saveOrUpdate(order);
				 return order.getId();
				 }
				
				//creating put mapping that updates the chef detail
				 @PutMapping("/orders")
				 private Orders update(@RequestBody Orders order)
				 {
				 ordersService.saveOrUpdate(order);
				 return order;
				 }

}
