import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kudoswalldiscover',
  template: `
    <h1>
      kudoswalldiscover works!
    </h1>
    <a href={{source[0].source}}>Visit</a>
  `,
  styleUrls: ['./kudoswalldiscover.component.css']
})
export class KudoswalldiscoverComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {
  }
  source=environment.projects.filter((s)=>s.name=='discover.kudoswall')

}
