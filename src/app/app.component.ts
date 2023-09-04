import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'angular_project4';
  public show:boolean = true;
  constructor(){}
  ngOnInit(){}

  toggle() 
  {
    this.show = !this.show;
  }
}