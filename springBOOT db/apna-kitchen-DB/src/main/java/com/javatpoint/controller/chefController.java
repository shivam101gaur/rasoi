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

import com.javatpoint.model.Chef;
import com.javatpoint.model.Customer;
import com.javatpoint.service.ChefService;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class chefController {

	@Autowired
	private ChefService chefService;
	//creating a get mapping that retrieves all the chef detail from the database
	@GetMapping("chef")
	private List<Chef> getAllChef(){
		return chefService.getAllChef();
	}
	
	//getting customized chef
	 @GetMapping("/chef/{key}/{value}")
	 private  List<Chef> getFilteredChef(@PathVariable("key") String key,@PathVariable("value") String value){
			return chefService.getFilteredChef(key,value);
		}
	
	//creating a get mapping that retrieves the detail of a specific chef
	@GetMapping("/chef/{chefid}")
	 private Chef getChef(@PathVariable("chefid") int chefid)
	 {
	 return chefService.getChefById(chefid);
	 }
	
	//creating a delete mapping that deletes a specified chef
		@DeleteMapping("/chef/{chefid}")
		 private void deleteChef(@PathVariable("chefid") int chefid)
		 {
		 chefService.delete(chefid);
		 }
	
	//creating post mapping that post the chef detail in the database
	 @PostMapping("/chef")
	 private int saveChef(@RequestBody Chef chef)
	 {
	 chefService.saveOrUpdate(chef);
	 return chef.getId();
	 }
	 
	//creating put mapping that updates the chef detail
	 @PutMapping("/chef")
	 private Chef update(@RequestBody Chef chef)
	 {
	 chefService.saveOrUpdate(chef);
	 return chef;
	 }
	
}
