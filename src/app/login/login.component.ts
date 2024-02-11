import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { LoginCredentials } from '../models/LoginCredentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  public username!: string;
  public password!: string;
  constructor(
    private loginService: LoginService
  ){}

  public login(): void{
    const credentials: LoginCredentials = new LoginCredentials(this.username, this.password);
    this.loginService.sendLoginRequest(credentials);
  }

}
