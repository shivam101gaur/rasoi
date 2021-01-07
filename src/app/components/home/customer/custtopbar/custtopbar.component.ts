import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custtopbar',
  templateUrl: './custtopbar.component.html',
  styleUrls: ['./custtopbar.component.css']
})
export class CusttopbarComponent implements OnInit {

  

  customerData: any = JSON.parse(sessionStorage.currentcustomer);

  
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['../login']);
  }
  }
