import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User} from '../shared/user';
import { AuthService } from '../shared/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables
  loginForm: FormGroup;
  isSubmitted= false;
  error: string='';

  //user object
  loginUser: User;

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //create reactive form
    this.loginForm=this.formBuilder.group({
      
      //form control name
      userName: ['',[Validators.required]],
      password: ['',[Validators.required]]

    });
  }

  //Get all controls for validation
  get formControls(){
    return this.loginForm.controls;
  }

  //check credentials
  loginCredentials(){
    console.log(this.loginForm.value);
    this.isSubmitted=true;
    
    //form is invalid
    if(this, this.loginForm.invalid){
      this.error="Sorry! Invalid entry. Try Again"
      return;
    }

    //form is valid
    if(this.loginForm.valid){
      //call webservice
      this.authService.loginVerify(this.loginForm.value)
        .subscribe(response=>{
          this.error='';
          console.log(response);

          // sessionStorage.setItem('USERNAME',response.userName);
          // sessionStorage.setItem('ACCESS_ROLE',response.roleId.toString());

          if(response!=null){
          sessionStorage.setItem('USERNAME',response.userName);
          sessionStorage.setItem('ACCESS_ROLE',response.roleId.toString());
          }


          if(response==null){
            this.error="Invalid username and/or password"
          }else if(response.roleId===1){
            this.router.navigateByUrl('/admin')
            console.log("Administrator");
          }else if(response.roleId===2){
            this.router.navigateByUrl('/coordinator')
            console.log("Coordinator");
          }else if(response.roleId===3){
            this.router.navigateByUrl('/manager')
            console.log("Manager");
          }else{
            this.error="you're not allowed to access this system";
          }
        },
        error=>{
          console.log(error);
          this.error="Sorry! Invalid entry. Try Again";
        }
        )
    }
  }

}
