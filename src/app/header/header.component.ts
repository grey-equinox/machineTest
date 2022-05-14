import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: any;
  roleName: any;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.userName=sessionStorage.getItem('USERNAME');
    if(sessionStorage.getItem('ACCESS_ROLE')==='1'){
      this.roleName="Administrator"
    }else if(sessionStorage.getItem('ACCESS_ROLE')==='2'){
      this.router.navigateByUrl('/coordinator')
      this.roleName="Coordinator"
    }else if(sessionStorage.getItem('ACCESS_ROLE')==='3'){
      this.router.navigateByUrl('/manager')
      this.roleName="Manager"
    }else{
      this.roleName="Guest"
    }
  }

  goHome(){
    console.log("Go Home");
    //dashboard of Admin/Coordinator/Manager
  }

  //logOut
  logOut(){
    console.log("Logging out");
    //need to redirect to login page and password and username needs to be reset
    this.authService.logOut();
    this.router.navigateByUrl('');
  }
}
