import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ShareDataService } from "../../../../services/share-data.service";

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {

  constructor(private shareData: ShareDataService, private http: HttpService,private router:Router) { }
  editableItem = this.shareData.getEditableItem();


  ngOnInit(): void {
    console.log(this.editableItem);

  }
  editItem(name:string,price:any){
    this.editableItem.dish = name;
    this.editableItem.price = price;
    this.http.editItem(this.editableItem.id,this.editableItem);
    this.router.navigate(['chef'])
    
    

  }

}
