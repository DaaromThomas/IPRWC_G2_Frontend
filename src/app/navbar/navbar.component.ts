import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  public loggedIn: boolean = false;
  
  constructor(
    private appComponent: AppComponent
  ){}

  ngOnInit(){
    this.loggedIn = this.appComponent.getLoggedIn();
  }

}
