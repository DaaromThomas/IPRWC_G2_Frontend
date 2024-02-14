import { Component, EventEmitter, Output } from '@angular/core';
import { LoginCredentials } from '../../models/LoginCredentials';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.less'
})
export class LoginformComponent {
  public username!: string;
  public password!: string;

  @Output() loginCredentialsEvent: EventEmitter<LoginCredentials> = new EventEmitter<LoginCredentials>();

  public login(): void {
    const credentials: LoginCredentials = new LoginCredentials(this.username, this.password);
    this.loginCredentialsEvent.emit(credentials);
  }
}
