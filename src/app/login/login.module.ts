import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, NgModule } from '@angular/core';
import { LoginformComponent } from './loginform/loginform.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginformComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers:[NavbarComponent]
})
export class LoginModule { }