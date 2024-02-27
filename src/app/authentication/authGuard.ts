// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    private isAdmin: boolean = false;

    constructor(private router: Router, private loginService: LoginService) {
        this.loginService.isAdmin$.subscribe((data) => {
            this.isAdmin = data;
        })
    }

  canActivate(): boolean {
    if (this.isAdmin) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
