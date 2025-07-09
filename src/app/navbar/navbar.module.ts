import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],exports: [ NavbarComponent]
})
export class NavbarModule { }