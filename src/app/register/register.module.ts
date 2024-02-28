import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterformComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }