import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DmsComponent } from './components/dms/dms.component';
import { AdditemComponent } from './components/home/chef/additem/additem.component';
import { ChefComponent } from './components/home/chef/chef.component';
import { EdititemComponent } from './components/home/chef/edititem/edititem.component';
import { CustomerComponent } from './components/home/customer/customer.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegistrationComponent } from './components/home/registration/registration.component';
import { ChefGuard } from './services/chef.guard';
import { CustomerGuard } from './services/customer.guard';

const routes: Routes = [
  {path:'dms',component:DmsComponent},
  { path: '', redirectTo: 'login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'customer', component: CustomerComponent,canActivate:[CustomerGuard] },
  { path: 'chef', component: ChefComponent , canActivate:[ChefGuard],
    children:[
    {path:'additem',component:AdditemComponent},
    {path:'edititem',component:EdititemComponent}
  ]},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
