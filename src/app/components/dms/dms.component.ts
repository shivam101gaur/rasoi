import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dms',
  templateUrl: './dms.component.html',
  styleUrls: ['./dms.component.css']
})
export class DmsComponent implements OnInit {

  drones:any
  Math = Math;
  occupiedDrones:any;

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.http.getAllDrones().subscribe(data=>{
      this.drones = data;
      console.log(this.drones);
      this.occupiedDrones = this.drones.filter((drone : any)=>{ if(drone.busy){return drone} });
      
    })
  }
  deleteDrone(id:number){
    this.http.deleteDrone(id);
    this.ngOnInit();
  }
  addDrone(){
    var newDrone={
      busy:false,
      orderID:0
    }
    this.http.addDrone(newDrone);
    this.ngOnInit();
  }

}
