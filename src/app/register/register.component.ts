import { Component } from '@angular/core';
import { RegisterCredentials } from '../models/RegisterCredentials';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent {
  public username!: string;
  public password!: string;
  public email!: string;

  constructor(
    private registerService: RegisterService
  ){}

  public register(): void{
    const registerCredentials: RegisterCredentials = new RegisterCredentials(this.username, this.password, this.email);
    this.registerService.sendRegisterRequest(registerCredentials);
  }

}
