import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  allOrders:  any;
  customer = JSON.parse(sessionStorage.currentcustomer);
  constructor( private http: HttpService) { }

  ngOnInit(): void {
    this.http.getAllOrders(this.customer.id).subscribe(data=>{
      this.allOrders = data;
    });
    
  }
  
   

}
