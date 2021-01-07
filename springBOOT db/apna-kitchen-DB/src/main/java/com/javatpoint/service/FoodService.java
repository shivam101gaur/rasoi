package com.javatpoint.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.javatpoint.model.Food;
import com.javatpoint.model.Orders;
import com.javatpoint.repository.FoodRepository;

@Service
public  class FoodService {
	
	@Autowired
	FoodRepository foodRepository;
	//getting all books record by using the method findAll() of CrudRepository
	public List<Food> getAllFoods()
	  {
	  List<Food> items = new ArrayList<Food>();
	  foodRepository.findAll().forEach(items1->items.add(items1));
	return items;
	   
	  }
	
	// getting customized food	
			public List<Food> getFilteredFood(String key, String value) {
				List<Food> food = new ArrayList<Food>();
				foodRepository.findAll().forEach((dish) -> {	  
				switch(key) 
				{
					
					case "chefID":
					{
					
						if(dish.getChefID()==Integer.parseInt(value))
						{ food.add(dish); }
						break;
					}
						
					default:
						{ System.out.print("invalid key in path ");	return; }		
				 }	  
			  });
			return food; 
			}	
	
	
	 public Food getItemsById(int id)
	  {
		
	  return foodRepository.findById(id).get();
	  }
	 public void saveOrUpdate(Food items)
	  {
       foodRepository.save(items);
		 
	  }
	 
	 public void delete(int id)
	  {
	    foodRepository.deleteById(id);
		 
	  }
	  //updating a record
	  public void update(Food items, int id)
	  {
	  foodRepository.save(items);
		  
     }

}
