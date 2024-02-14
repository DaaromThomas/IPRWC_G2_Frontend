import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterCredentials } from '../../models/RegisterCredentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.less']
})
export class RegisterformComponent {
  public username = '';
  public password = '';
  public email = '';
  public usernameError = false;
  public emailError = false;
  public passwordError = false;

  @Output() registerCredentialsEvent = new EventEmitter<RegisterCredentials>();

  constructor(private router: Router) {}

  public register(): void {
    if (this.checkInputs()) {
      const credentials: RegisterCredentials = new RegisterCredentials(this.username, this.password, this.email);
      this.registerCredentialsEvent.emit(credentials);
    }
  }

  private checkInputs(): boolean {
    let isValid = true;
    if (!this.username.trim()) {
      this.usernameError = true;
      isValid = false;
    } else {
      this.usernameError = false;
    }
    if (!this.email.trim() || !this.isValidEmail(this.email)) {
      this.emailError = true;
      isValid = false;
    } else {
      this.emailError = false;
    }
    if (!this.password.trim()) {
      this.passwordError = true;
      isValid = false;
    } else {
      this.passwordError = false;
    }
    return isValid;
  }

  private isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  public navigateToLoginComponent(): void {
    this.router.navigate(['/login']);
  }
}
