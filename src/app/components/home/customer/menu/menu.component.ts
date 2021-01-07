import { Component, OnInit } from '@angular/core';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../../../services/http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  allChef: Object | any;
  customer = JSON.parse(sessionStorage.currentcustomer);

  constructor(private http: HttpService) { }

  ngOnInit(): void {

    this.getLatestChef().then((data) => {

      this.allChef = data;
      //console.log(this.allChef);
    });


  }

  async getLatestChef() {

    return await new Promise<any>((cres) => {
      this.http.getAllChef().subscribe(async (chefData: any) => {
        var localChefs = chefData;

          for (var chefs of localChefs) {


          //getting chef menu for each chef id
          let getChefMenu = new Promise<any>
            ((resolve, reject) => {
              this.http.getChefsMenu(chefs.id).subscribe((chefMenu) => {
                //   console.log('just receievcedd chef menu');
                // console.log(chefmenu);
                resolve(chefMenu);
              });

            });
          chefs['menu'] = await getChefMenu;
          cres(localChefs)
        }

      })
    })


  }
  async addOrder(foodname: any,chefname:any, foodprice: number, chefid: number) {
 
    var newOrder = {
      chefName:chefname,
      chefID: chefid,
      customerID:this.customer.id,
      foodName:foodname,
      foodPrice: foodprice,
      status:true
    }
    this.http.createOrder(newOrder).subscribe((data:any)=>{
      var lastOrderID = data.id;
      console.log(lastOrderID);
      //getting free drone from droneDB
      this.http.getAvailableDrones().subscribe((data:any)=>{
        //assinging the first available drone to a variable
 
        if(data[0]!=undefined){
        var availableDrone = data[0];
        availableDrone.orderID = lastOrderID
        availableDrone.busy = true
        console.log(data);
        //changing drone status to busy in DB
        this.http.editDrone(availableDrone.id,availableDrone);
        // location.reload();  
      }
      else{
        this.http.deleteOrder(lastOrderID);
        alert('Drone not available!!\nBooking cancelled.')
        //delete last order from data base
      }
      })
    });
    
 }



}
