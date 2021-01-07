import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {
constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('enetered cust gaurd');
      
      if(sessionStorage.currentcustomer==undefined){
      this.router.navigate(['login']);
        return false
      }
      return (sessionStorage.length==0)?false:JSON.parse(sessionStorage.currentcustomer).session;
  }
  
}
