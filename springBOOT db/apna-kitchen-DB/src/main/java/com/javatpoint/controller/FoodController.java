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

import com.javatpoint.model.Drones;
import com.javatpoint.model.Food;

import com.javatpoint.service.FoodService;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class FoodController {
	
	@Autowired
	private FoodService foodService;
	//creating a get mapping that retrieves all the customers detail from the database
	@GetMapping("food")
	private List<Food> getAllFoods(){
		return foodService.getAllFoods();
	}
	//creating a get mapping that retrieves the detail of a specific customer
		 @GetMapping("/food/{id}")
		 private Food getItems(@PathVariable("id") int id)
		 {
		 return foodService.getItemsById(id);
		 }
		//getting customized food
		 @GetMapping("/food/{key}/{value}")
		 private  List<Food> getFilteredFood(@PathVariable("key") String key,@PathVariable("value") String value){
				return foodService.getFilteredFood(key,value);
			}	 
		 
		//creating a delete mapping that deletes a specified customer
		 @DeleteMapping("/food/{id}")
		 private void deleteitem(@PathVariable("id") int id)
		 {
		 foodService.delete(id);
		 }
		 
		//creating post mapping that post the customer detail in the database
		 @PostMapping("/food")
		 private int saveitem(@RequestBody Food items)
		 {
		 foodService.saveOrUpdate(items);
		 return items.getId();
		 }
		 
		 //creating put mapping that updates the customer detail
		 @PutMapping("/food")
		 private Food update(@RequestBody Food items)
		 {
		 foodService.saveOrUpdate(items);
		 return items;
		 }
	
}
