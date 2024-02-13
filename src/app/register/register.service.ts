import { Injectable } from '@angular/core';
import { RegisterCredentials } from '../models/RegisterCredentials';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ){}

  sendRegisterRequest(credentials: RegisterCredentials) {
    this.http
      .post("http://localhost:8080/register", credentials, { responseType: 'text' })
      .subscribe((data) => {
        console.log(data);
      });
  }
  
  
}
