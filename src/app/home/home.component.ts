import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  template: `
    <h1>
      <app-todo></app-todo>
    </h1>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
