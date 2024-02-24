import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { LoginCredentials } from '../models/LoginCredentials';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent implements OnInit{
  credentials!: LoginCredentials;

  constructor(
    private loginService: LoginService,
    private appComponent: AppComponent
  ){}

  ngOnInit(): void {
    this.appComponent.shopping = false;
  }

  public handleLoginCredentials(credentials: LoginCredentials): void{
    this.credentials = credentials;
    this.login();
  }

  public login(): void{
    console.log(this.credentials.username);
    this.loginService.sendLoginRequest(this.credentials);
  }
}
