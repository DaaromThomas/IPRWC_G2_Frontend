import { Component, EventEmitter, Output } from '@angular/core';
import { LoginCredentials } from '../../models/LoginCredentials';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.less']
})
export class LoginformComponent {
  public username = '';
  public password = '';
  public usernameError = false;
  public passwordError = false;
  public loginError = false;

  @Output() loginCredentialsEvent = new EventEmitter<LoginCredentials>();

  constructor(
    private router: Router,
    private loginService: LoginService  
  ) {}

  ngOnInit(){
    this.loginService.loginError$.subscribe(loginError => {
      this.loginError = loginError;
    })
  }

  public login(): void {
    if (this.checkInputs()) {
      const credentials: LoginCredentials = new LoginCredentials(this.username, this.password);
      this.loginCredentialsEvent.emit(credentials);
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
    if (!this.password.trim()) {
      this.passwordError = true;
      isValid = false;
    } else {
      this.passwordError = false;
    }
    return isValid;
  }

  public navigateToRegisterComponent(): void {
    this.router.navigate(['/register']);
  }
}
