import { Component } from '@angular/core';
import { RegisterCredentials } from '../models/RegisterCredentials';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent {

  private credentials!: RegisterCredentials;

  constructor(
    private registerService: RegisterService
  ){}

  public handleRegisterCredentials(credentials: RegisterCredentials): void{
    this.credentials = credentials;
    this.register();
  }

  public register(): void{
    this.registerService.sendRegisterRequest(this.credentials);
  }

}
