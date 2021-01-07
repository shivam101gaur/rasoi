import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  editableItem: any;
 
  //creates & returns a random background image 
  createBgImg(){
    
    // array stores all the images name in assets folder     
    var backgrounds: string[] = ['burger.jpg', 'cholepoori.jpg', 'dosa.jpg', 'idli.jpg', 'noodles.jpg','northindiafood.jpg','pizza.jpg'];

      let imgIndex = Math.floor(Math.random() * (backgrounds.length));
      let bgImg = "../../assets/" + backgrounds[imgIndex];
      console.log('loaded image : '+backgrounds[imgIndex]);
      return bgImg;
      
    }
    setEditableItem(item:any){ this.editableItem = item;  }
    getEditableItem(){return this.editableItem}
}
