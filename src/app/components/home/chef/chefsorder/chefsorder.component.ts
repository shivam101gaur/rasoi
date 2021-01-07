import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-chefsorder',
  templateUrl: './chefsorder.component.html',
  styleUrls: ['./chefsorder.component.css']
})
export class ChefsorderComponent implements OnInit {
  orders:any;
  location = location;

  constructor(private http:HttpService) { }

  ngOnInit(): void {
  this.http.getChefsOrders(JSON.parse(sessionStorage.currentchef).name).subscribe(data=>{
    this.orders = data;
  })
  }
  dispatch(order:any){
    order.status = false;
    this.http.dispatchitem(order);

    //freeing the drone attached to this order
    console.log(order.id);
    this.http.getDroneFromCustomerId(order.id).subscribe((data:any)=>{
      
      //drone attached to this order
      var attachedDrone = data[0];
      //freeing the drone
      attachedDrone.busy=false;
      attachedDrone.orderID=null;

      //updating drone in DB
      this.http.editDrone(attachedDrone.id,attachedDrone);
      
    })
    

   


  }
 

}
