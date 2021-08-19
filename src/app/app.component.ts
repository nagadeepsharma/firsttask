import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firsttask';
  projectsInfo={
    projectList:environment.projects,
    logo:environment.logo,
  }
  logout(){
    localStorage.setItem('isLogged','False')
    alert("You Logged out")
    this.isLogged=false
  }
  isLogged=false
  ngOnInit():void{
    if(localStorage.getItem('isLogged')=='True'){
      this.isLogged=true   
    }
    else{
      this.isLogged=false
    }
  }

}
