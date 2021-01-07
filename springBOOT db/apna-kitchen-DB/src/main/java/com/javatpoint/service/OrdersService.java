package com.javatpoint.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatpoint.model.Customer;
import com.javatpoint.model.Orders;
import com.javatpoint.repository.OrdersRepository;

@Service
public class OrdersService {
	
	@Autowired
	OrdersRepository ordersRepository;
	
	//getting all chef record by using the method findAll() of CrudRepository
		public List<Orders> getAllOrder()
		  {
		  List<Orders> order = new ArrayList<Orders>();
		  ordersRepository.findAll().forEach(order1 -> order.add(order1));
		  return order; 
		  }
		
	// getting customized orders	
		public List<Orders> getFilteredOrders(String key, String value) {
			List<Orders> orders = new ArrayList<Orders>();
			ordersRepository.findAll().forEach((order) -> {	  
			switch(key) 
			{
				case "chefName":
					{
					if(order.getChefName().toString().intern()==(value).toString().intern())
					  {  orders.add(order);   }	
					break;
					}
				case "customerID":
				{
				
					if(order.getCustomerID()==Integer.parseInt(value))
					{ orders.add(order); }
					break;
				}
				case "session":
					{
					if(order.isStatus()==Boolean.valueOf(value)) 
					{  orders.add(order);   }
						break;			
					}	
				default:
					{ System.out.print("invalid key in path ");	return; }		
			 }	  
		  });
		return orders; 
		}	
		
		//getting a specific record by using the method findById() of CrudRepository
		  public Orders getOrderById(int id)
		  {
		  return ordersRepository.findById(id).get();
		  }
		  
		//saving a specific record by using the method save() of CrudRepository
		  public void saveOrUpdate(Orders order)
		  {
		  ordersRepository.save(order);
		  }
		  
		//deleting a specific record by using the method deleteById() of CrudRepository
		  public void delete(int id)
		  {
		  ordersRepository.deleteById(id);
		  }
		  
		//updating a record
		  public void update(Orders order, int orderid)
		  {
		  ordersRepository.save(order);
	      }

}
