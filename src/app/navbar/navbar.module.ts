import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NavbarButtonComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],exports: [ NavbarComponent]
})
export class NavbarModule { }