import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }
  source=environment.projects.filter((s)=>s.name=='pro.kudoswall')
  
}
