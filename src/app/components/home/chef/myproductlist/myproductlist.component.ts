import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from "../../../../services/http.service";
import { ShareDataService } from "../../../../services/share-data.service";


@Component({
  selector: 'app-myproductlist',
  templateUrl: './myproductlist.component.html',
  styleUrls: ['./myproductlist.component.css']
})
export class MyproductlistComponent implements OnInit {
  //food items of this particular chef
  myItems: any;
  //storing this chef on local variable from session storage
  chef = JSON.parse(sessionStorage.currentchef);





  constructor(private http: HttpService, private shareData: ShareDataService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('product list was initialized');
    
    //getting food items of this chef from food object in JSON
    this.http.getChefMenu(this.chef.id).then(data => {
      this.myItems = data;
    })
  }
  //deleting food items from chef product list and its database
  dltItem(itemIndex: number) { this.http.dltItem(itemIndex); this.ngOnInit(); }

  sendEdit(toEditItem: any) {
    this.shareData.setEditableItem(toEditItem);
    this.router.navigate(['edititem'],{relativeTo:this.route,skipLocationChange:true});
  }

}
