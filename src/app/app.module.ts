import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegistrationComponent } from './components/home/registration/registration.component';

//importing all the material modules
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import { ChefComponent } from './components/home/chef/chef.component';
import { CustomerComponent } from './components/home/customer/customer.component';
import { ChefsorderComponent } from './components/home/chef/chefsorder/chefsorder.component';
import { MyproductlistComponent } from './components/home/chef/myproductlist/myproductlist.component';
import { TopbarComponent } from './components/home/chef/topbar/topbar.component';
import { AdditemComponent } from './components/home/chef/additem/additem.component';
import { EdititemComponent } from './components/home/chef/edititem/edititem.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/home/customer/menu/menu.component';
import { OrdersComponent } from './components/home/customer/orders/orders.component';
import { CusttopbarComponent } from './components/home/customer/custtopbar/custtopbar.component';
import { DmsComponent } from './components/dms/dms.component';
import { MatGridListModule } from "@angular/material/grid-list";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ChefComponent,
    CustomerComponent,
    ChefsorderComponent,
    MyproductlistComponent,
    TopbarComponent,
    AdditemComponent,
    EdititemComponent,
    MenuComponent,
    OrdersComponent,
    CusttopbarComponent,
    DmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatSelectModule,
    NgbModule,
    MatGridListModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
