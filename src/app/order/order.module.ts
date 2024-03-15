import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderComponent } from './order.component';


@NgModule({
  declarations: [
    OrderFormComponent,
    OrderComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }