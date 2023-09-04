import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})


export class HomeComponent {

  public show:boolean = true;
  public buttonName:any = 'Show';

  leftToggle() {
    this.show = !this.show;
    // Change the name of the button.
    if(this.show)  
      this.buttonName = "hide";
    else
      this.buttonName = "Show";
  }
}
