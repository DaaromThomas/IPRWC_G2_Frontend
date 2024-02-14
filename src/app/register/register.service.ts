import { Injectable } from '@angular/core';
import { RegisterCredentials } from '../models/RegisterCredentials';
import { HttpClient, HttpParams } from '@angular/common/http';
import { error } from 'console';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private usernameInUseSubject = new BehaviorSubject<boolean>(false);
  usernameInUse$ = this.usernameInUseSubject.asObservable();

  constructor(
    private http: HttpClient
  ){}

  sendRegisterRequest(credentials: RegisterCredentials) {
    this.http
      .post("http://localhost:8080/register", credentials, { responseType: 'text' })
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        if(error.error === "Username in use"){
          this.usernameInUseSubject.next(true);
        }
      });
  }
  
  
}
