import { Component, OnInit } from '@angular/core';
import { RegisterCredentials } from '../models/RegisterCredentials';
import { RegisterService } from './register.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent implements OnInit{

  private credentials!: RegisterCredentials;

  constructor(
    private registerService: RegisterService,
    private appComponent: AppComponent
  ){}

  ngOnInit(): void {
    this.appComponent.shopping = false;
  }

  public handleRegisterCredentials(credentials: RegisterCredentials): void{
    this.credentials = credentials;
    this.register();
  }

  public register(): void{
    console.log(this.credentials.username);
    this.registerService.sendRegisterRequest(this.credentials);
  }

}
