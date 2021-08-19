import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prokudoswall',
  template: `
    <h1>
      prokudoswall works!
    </h1>
    <a href={{source[0].source}}>Visit</a>
  `,
  styleUrls: ['./prokudoswall.component.css']
})
export class ProkudoswallComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  isLogged=false
  ngOnInit(): void {
    if(localStorage.getItem('isLogged')=='True'){
      this.isLogged=true   
    }
    else{
      this.isLogged=false
      this.router.navigate(['/login'])
      alert("please login first")
      
    }
  }
  source=environment.projects.filter((s)=>s.name=='pro.kudoswall')
  
}
