import { Component, OnInit } from '@angular/core';
import { ShareDataService } from "../../../services/share-data.service";
import { HttpService } from '../../../services/http.service'
import { Router } from "@angular/router";



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newBackground: string | undefined;
  //hide property to be used in password field
  hide = true;

  constructor(private sharedata: ShareDataService, private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.newBackground = this.sharedata.createBgImg();
  }

  async register(name: string, password: string, usertype: string) {
    // if(name =="" || password ==""){
    //   // alert('May be have a name!\nAlso its secured to think of a password of some length');
    //   return ;
    // }
    
 
    var ifexists;
    // console.log(name, password, usertype);

    if (usertype == 'Chef') {
      await this.http.getChef(name).then(data => { ifexists = data; });

      if (ifexists != undefined) {
        alert('user name already used! \ntry another user name..');
        window.location.reload();
      }
      else {
        //creating a newchef object to be added to DB
        var newChef = {
          name: name,
          password: password,
         }
        //add a newchef to DB
        this.http.addChef(newChef);
        alert('You have been added as new chef!\nPlease login to continue.')
        this.router.navigate(['login']);
        
      }

    }
    else {
      await this.http.getCustomer(name).then(data => {
        ifexists = data;
      });
      if (ifexists != undefined) {
        alert('user name already used! \ntry another user name..');
        window.location.reload();

      }
      else {
        //creating a newcustomer object to be added to DB
        var newCustomer = {
          name: name,
          password: password          
        }
        //add a newcustomer to DB
        this.http.addCustomer(newCustomer);
        alert('You have been added as new customer!\nPlease login to continue.')
        this.router.navigate(['login']);
      }

    }
  }
}



