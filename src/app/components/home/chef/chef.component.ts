import { Component, OnInit } from '@angular/core';
import { ShareDataService } from "../../../services/share-data.service";

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  newBackground: string | undefined;
  constructor(public sharedata: ShareDataService) { }

  ngOnInit(): void {
    this.newBackground = this.sharedata.createBgImg();    
    
  }

}