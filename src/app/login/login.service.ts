import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/LoginCredentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private JWTToken!: string;
  
  constructor(
    private http: HttpClient
  ) { }

  public sendLoginRequest(credentials: LoginCredentials) {
    return this.http
      .post("http://localhost:8080/login", credentials, { responseType: 'text' })
      .subscribe((data) => {
      this.JWTToken = data;
    });
  }
}
