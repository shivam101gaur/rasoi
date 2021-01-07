package com.javatpoint.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatpoint.model.Chef;
import com.javatpoint.model.Customer;
import com.javatpoint.repository.ChefRepository;

@Service
public class ChefService {
	
	@Autowired
	ChefRepository chefRepository;
	
	//getting all chef record by using the method findAll() of CrudRepository
	public List<Chef> getAllChef()
	  {
	  List<Chef> chef = new ArrayList<Chef>();
	  chefRepository.findAll().forEach(chef1 -> chef.add(chef1));
	  return chef; 
	  }
	
	//get customized list of chef based on their properties arguments
	
	public List<Chef> getFilteredChef(String key, String value) {
		List<Chef> chefs = new ArrayList<Chef>();
		  chefRepository.findAll().forEach((chef) -> {	  
		switch(key) 
		{
			case "name":
				{
				if(chef.getName().toString().intern()==(value).toString().intern())
				  {  chefs.add(chef);   }	
				break;
				}
			case "session":
				{
				if(chef.isSession()==Boolean.valueOf(value)) 
				{  chefs.add(chef);   }
					break;			
				}	
			default:
				{ System.out.print("invalid key in path ");	return; }		
		 }	  
	  });
	return chefs; 
	}
	
	//getting a specific record by using the method findById() of CrudRepository
	  public Chef getChefById(int id)
	  {
	  return chefRepository.findById(id).get();
	  }
	  
	//saving a specific record by using the method save() of CrudRepository
	  public void saveOrUpdate(Chef chef)
	  {
	  chefRepository.save(chef);
	  }
	  
	//deleting a specific record by using the method deleteById() of CrudRepository
	  public void delete(int id)
	  {
	  chefRepository.deleteById(id);
	  }
	  
	//updating a record
	  public void update(Chef chef, int chefid)
	  {
	  chefRepository.save(chef);
      }

}