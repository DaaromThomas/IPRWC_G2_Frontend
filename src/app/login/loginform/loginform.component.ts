import { Component, EventEmitter, Output } from '@angular/core';
import { LoginCredentials } from '../../models/LoginCredentials';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder  
  ) {}

  ngOnInit(){
    this.loginService.loginError$.subscribe(loginError => {
      this.loginError = loginError;
    })
  }

  public login(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      const credentials: LoginCredentials = new LoginCredentials(formData.username, formData.password);
      this.loginCredentialsEvent.emit(credentials);
    }
  }

  public navigateToRegisterComponent(): void {
    this.router.navigate(['/register']);
  }
}
