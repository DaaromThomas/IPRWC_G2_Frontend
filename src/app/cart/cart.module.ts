import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CartComponent } from './cart.component';
import { ProductInCartComponent } from './product-in-cart/product-in-cart.component';


@NgModule({
  declarations: [
    CartComponent,
    ProductInCartComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],exports: [ CartComponent ]
})
export class CartModule { }