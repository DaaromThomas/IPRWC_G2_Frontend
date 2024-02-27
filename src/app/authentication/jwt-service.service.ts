import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService implements HttpInterceptor{

  constructor(
    private loginService: LoginService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercept()");
    const token = this.loginService.JwtToken;
    console.log(token)

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(request);
  }
}
