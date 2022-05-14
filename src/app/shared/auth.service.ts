import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  //verify login password
  public loginVerify(user: User) {
    //calling webapi for checking username and password
    return this.httpClient.get<User>(
      environment.apiUrl+'/api/users/'+user.userName+'&'+user.password);
  }

  //logout
  public logOut(){
    //to remove user credentials
    sessionStorage.removeItem('USERNAME');
    sessionStorage.removeItem('ACCESS_ROLE');

  }
}
