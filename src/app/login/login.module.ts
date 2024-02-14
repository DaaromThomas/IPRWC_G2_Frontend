import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginformComponent } from './loginform/loginform.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginformComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }