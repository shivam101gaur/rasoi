import { Component, OnInit } from '@angular/core';
import { ShareDataService } from "../../../services/share-data.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  newBackground: string | undefined;
  constructor(public sharedata: ShareDataService) { }

  ngOnInit(): void {
    this.newBackground = this.sharedata.createBgImg();
  }

}
