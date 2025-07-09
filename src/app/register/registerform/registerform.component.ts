import { Component, EventEmitter, Output } from '@angular/core';
import { RegisterCredentials } from '../../models/RegisterCredentials';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.less']
})
export class RegisterformComponent {
  registerForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  public usernameInUse = false;

  @Output() registerCredentialsEvent = new EventEmitter<RegisterCredentials>();

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(){
    this.registerService.usernameInUse$.subscribe(isUsernameInUse => {
      this.usernameInUse = isUsernameInUse;
    });
  }

  public register(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      const credentials: RegisterCredentials = new RegisterCredentials(formData.username, formData.password, formData.email);
      this.registerCredentialsEvent.emit(credentials);
    }
  }

  public navigateToLoginComponent(): void {
    this.router.navigate(['/login']);
  }
}
