package com.javatpoint.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javatpoint.model.Chef;
import com.javatpoint.model.Drones;

import com.javatpoint.repository.DroneRepository;

@Service
public class DroneService {
	
	@Autowired
    DroneRepository droneRepository;
	
	//getting all chef record by using the method findAll() of CrudRepository
	public List<Drones> getAllDrone()
	  {
	  List<Drones> drones = new ArrayList<Drones>();
	  System.out.print("asking drones");
	  droneRepository.findAll().forEach((drone) -> {
		  System.out.print("    ravn    ");
		  drones.add(drone);
		  }
	  );
	  return drones; 
	  }
	
	//get customized list of drones based on their properties arguments
	
		public List<Drones> getFilteredDrone(String key, String value) {
			List<Drones> drones = new ArrayList<Drones>();
			  droneRepository.findAll().forEach((drone) -> {	  
			switch(key) 
			{
			
			case "orderID":
			{
				System.out.print("asking orderid"); 
				if(drone.getOrderID()==Integer.parseInt(value))
				{ drones.add(drone); }
				break;
			}
				
				case "busy":
					{
					if(drone.isBusy()==Boolean.valueOf(value)) 
					{  drones.add(drone);   }
						break;			
					}	
				default:
					{ System.out.print("invalid key in path ");	return; }		
			 }	  
		  });
		return drones; 
		}
	
	//getting a specific record by using the method findById() of CrudRepository
	  public Drones getDroneById(int id)
	  {
	  return droneRepository.findById(id).get();
	  }
	  
	//saving a specific record by using the method save() of CrudRepository
	  public void saveOrUpdate(Drones drone)
	  {
	  droneRepository.save(drone);
	  }
	//deleting a specific record by using the method deleteById() of CrudRepository
	  public void delete(int id)
	  {
	  droneRepository.deleteById(id);
	  }

	//updating a record
	  public void update(Drones drone, int droneid)
	  {
	  droneRepository.save(drone);
      }
}
