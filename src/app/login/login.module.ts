import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginformComponent } from './loginform/loginform.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent,
    LoginformComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class LoginModule { }