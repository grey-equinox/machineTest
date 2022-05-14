import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //create constructor
  constructor(private router:Router){
    
  }

  //admin/manager/coordinator
  //any role is having data
  //URL is taken through ActivatedRouteSnapshot
  //check role ID here
  canActivate(
    route: ActivatedRouteSnapshot): boolean {

      //expected role - from URL
      const expectedRole = route.data.role;

      //current role  - from SessionStorage
      const currentRole = sessionStorage.getItem("ACCESS_ROLE");

      if(currentRole !== expectedRole){
        this.router.navigateByUrl('login');
        return false;
      }
    
    return true;
  }
  
}
