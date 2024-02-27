import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],exports: [ AdminComponent ]
})
export class CartModule { }