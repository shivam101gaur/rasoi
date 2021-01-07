import { Component, OnInit } from '@angular/core';
import { ShareDataService } from "../../../services/share-data.service";
import { HttpService } from "../../../services/http.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  newBackground: string | undefined;
  //hide property to be used in password field
  hide = true;


  current_customer: {name:string,password:string|undefined,id:number,session:boolean}|undefined;
  current_chef:  {name:string,password:string|undefined,id:number,session:boolean}|undefined;



  constructor(private sharedata: ShareDataService, private http: HttpService, private router: Router) { }

  ngOnInit(): void {

    this.newBackground = this.sharedata.createBgImg();
    sessionStorage.clear()
  }

  async validate(name: string, password: string, usertype: string) {

    //code for chef
    if (usertype == 'Chef') {

      //Getting chef from database and storing it in this.current_user
      await this.http.getChef(name).then(data => {
        this.current_chef = data;
      });


      if (this.current_chef != undefined) {


        if (this.current_chef.password == password  ) {
          console.log('initiating login.... ');

          // link to chef component
          // this.router.navigate['chef'];

          //update the chef session as true in DB
          // await this.http.editChef(this.chef.id, this.chef);
          this.current_chef.session = true;
          delete this.current_chef.password;
          sessionStorage.currentchef = JSON.stringify(this.current_chef);

          this.router.navigate(['chef']);


        }
        else { alert('wrong password!') ;window.location.reload(); }
      }
      else {alert('wrong user name');window.location.reload();}
      


    }


    //code for customer
    else {
      await this.http.getCustomer(name).then(data => {
        this.current_customer = data;
      });
      if (this.current_customer != undefined) {
        if (this.current_customer.password == password) {
          console.log('initiating customer login.... ');

          // link to customer component
          // this.router.navigate['customer'];



          delete this.current_customer.password;
          this.current_customer.session = true;
          //update the chef session as true in DB
          // await this.http.editCustomer(this.customer.id, this.customer);
          sessionStorage.currentcustomer = JSON.stringify(this.current_customer);
          this.router.navigate(['customer']);
        }
        else { alert('wrong password!');window.location.reload(); }
      }
      else { alert('user not found');window.location.reload(); }
    }


    
  }

}
