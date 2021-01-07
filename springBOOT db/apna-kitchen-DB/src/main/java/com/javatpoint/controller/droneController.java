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
import com.javatpoint.model.Drones;
import com.javatpoint.service.DroneService;
@CrossOrigin(origins={"http://localhost:4200","http://localhost:4200/customer","http://localhost:4200/chef","*"})
@RestController
public class droneController {
	
	@Autowired
	private DroneService droneService;
	//creating a get mapping that retrieves all the chef detail from the database
	@GetMapping("drones")
	private List<Drones> getAllDrone(){
		return droneService.getAllDrone();
	}
	
	
	//getting customized drone
		 @GetMapping("/drones/{key}/{value}")
		 private  List<Drones> getFilteredDrone(@PathVariable("key") String key,@PathVariable("value") String value){
				return droneService.getFilteredDrone(key,value);
			}
		
	
	//creating a get mapping that retrieves the detail of a specific chef
		@GetMapping("/drones/{droneid}")
		 private Drones getDrone(@PathVariable("droneid") int droneid)
		 {
		 return droneService.getDroneById(droneid);
		 }
		
		//creating a delete mapping that deletes a specified chef
				@DeleteMapping("/drones/{droneid}")
				 private void deleteDrone(@PathVariable("droneid") int droneid)
				 {
				 droneService.delete(droneid);
				 }
				
				//creating post mapping that post the chef detail in the database
				 @PostMapping("/drones")
				 private int saveDrone(@RequestBody Drones drone)
				 {
				 droneService.saveOrUpdate(drone);
				 return drone.getId();
				 }

				//creating put mapping that updates the chef detail
				 @PutMapping("/drones")
				 private Drones update(@RequestBody Drones drone)
				 {
				 droneService.saveOrUpdate(drone);
				 return drone;
				 }
}
