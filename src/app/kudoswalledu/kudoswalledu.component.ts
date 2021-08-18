import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-kudoswalledu',
  template: `
    <h1>
      kudoswalledu works!
    </h1>
    <a href={{source[0].source}}>Visit</a>
  `,
  styleUrls: ['./kudoswalledu.component.css']
})
export class KudoswalleduComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  source=environment.projects.filter((s)=>s.name=='edu.kudoswall')

}
