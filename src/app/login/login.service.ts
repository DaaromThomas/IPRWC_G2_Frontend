import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { LoginCredentials } from '../models/LoginCredentials';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private JWTToken!: string;

  private loginErrorSubject = new BehaviorSubject<boolean>(false);
  loginError$ = this.loginErrorSubject.asObservable();

  private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$ = this.isAdminSubject.asObservable();
  
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  public sendLoginRequest(credentials: LoginCredentials) {
    return this.http
      .post("http://localhost:8080/login", credentials, { responseType: 'text' })
      .subscribe((data) => {
      this.JWTToken = data;
      this.checkIfUserIsAdmin();
    }, (error) => {
      if(error.error === "Username or password is incorrect"){
        this.loginErrorSubject.next(true);
      }
    });
  }

  public checkIfUserIsAdmin(){
    this.http.post("http://localhost:8080/checkuser", this.JwtToken, {responseType: "text"})
      .subscribe((data) => {
        if(data === "Admin"){
          this.router.navigate(['/admin']);
          this.isAdminSubject.next(true);
        }else{
          this.router.navigate(['/home']);
          this.isAdminSubject.next(false)
        }
      });
  }

  public get JwtToken(){
    return this.JWTToken;
  }

  public set JwtToken(token: string){
    this.JWTToken = token;
  }
}

