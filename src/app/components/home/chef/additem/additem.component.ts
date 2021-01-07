import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../../services/http.service";
import { ShareDataService } from "../../../../services/share-data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  chef  = JSON.parse(sessionStorage.currentchef);

  constructor(private http: HttpService, public sharedata: ShareDataService, private router: Router) { }

  ngOnInit(): void {
  }
  addItem(name: string, price: any) {
    var newDish = {
      dish: name,
      price: Number(price),
      chefID: this.chef.id
    }
    alert('new dish')
    this.http.addItem(newDish);
    // location.reload();

  }

}
