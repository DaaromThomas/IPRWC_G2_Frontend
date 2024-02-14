import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterformComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class RegisterModule { }