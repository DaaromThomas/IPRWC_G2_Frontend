import { ChangeDetectorRef, Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  public loggedIn: boolean;
  public isAdmin: boolean = false;

  constructor(
    private appComponent: AppComponent,
    private loginService: LoginService,
    ){
    this.loggedIn = false;
  }

  ngOnInit(){
    this.loggedIn = this.appComponent.getLoggedIn();
    this.loginService.isAdmin$.subscribe((data) => {
      this.isAdmin = data;
    })
  }

  logout(){
    this.loginService.setAdmin(false);
    this.loginService.JwtToken = '';
    this.loggedIn = false;
  }

  setAdmin(value: boolean){
    this.isAdmin = value;
  }
}
