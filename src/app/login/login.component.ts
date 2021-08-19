import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    // private isLogged: Boolean,
    private formbuilder:FormBuilder,
  ) {}

  loginform=this.formbuilder.group({
    username:'',
    password:''
  })
  onSubmit(){
    let formdata=this.loginform.value;
    if(formdata.username===environment.user.username && formdata.password==environment.user.password){
      window.localStorage.setItem('isLogged','True')
      alert("login Success")
      this.isLogged=false
      window.location.reload()
      this.router.navigate([''])
      
   }
   else{
     alert("Invalid Credentials")
   }
    
  }
  
  isLogged=false;
  ngOnInit(): void {
    
    if(localStorage.getItem('isLogged')=='True'){
      this.isLogged=true
      this.router.navigate(['/'])
    }
    else{
      this.isLogged=false
    }
  }

}
