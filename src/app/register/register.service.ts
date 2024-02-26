import { Injectable } from '@angular/core';
import { RegisterCredentials } from '../models/RegisterCredentials';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../login/login.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private usernameInUseSubject = new BehaviorSubject<boolean>(false);
  usernameInUse$ = this.usernameInUseSubject.asObservable();

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private appComponent: AppComponent,
    private router: Router
  ){}

  sendRegisterRequest(credentials: RegisterCredentials) {
    this.http
      .post("http://localhost:8080/register", credentials, { responseType: 'text' })
      .subscribe((data) => {
        console.log(data);
        this.loginService.JwtToken = data;
        this.appComponent.setLoggedIn(true);
        this.router.navigate(['/home']);
      }, (error) => {
        if(error.error === "Username in use"){
          this.usernameInUseSubject.next(true);
        }
      });
  }
  
  
}
