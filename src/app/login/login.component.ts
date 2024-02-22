import { Component, Input } from '@angular/core';
import { LoginService } from './login.service';
import { LoginCredentials } from '../models/LoginCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  credentials!: LoginCredentials;

  constructor(
    private loginService: LoginService
  ){}

  public handleLoginCredentials(credentials: LoginCredentials): void{
    this.credentials = credentials;
    this.login();
  }

  public login(): void{
    console.log(this.credentials.username);
    this.loginService.sendLoginRequest(this.credentials);
  }
}
