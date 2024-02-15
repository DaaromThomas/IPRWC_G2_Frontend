import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/LoginCredentials';
import { error } from 'console';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private JWTToken!: string;
  private loginErrorSubject = new BehaviorSubject<boolean>(false);
  loginError$ = this.loginErrorSubject.asObservable();
  
  constructor(
    private http: HttpClient
  ) { }

  public sendLoginRequest(credentials: LoginCredentials) {
    return this.http
      .post("http://localhost:8080/login", credentials, { responseType: 'text' })
      .subscribe((data) => {
      this.JWTToken = data;
    }, (error) => {
      if(error.error === "Username or password is incorrect"){
        this.loginErrorSubject.next(true);
      }
    });
  }
}

