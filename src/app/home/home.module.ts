import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],exports: [ HomeComponent]
})
export class HomeModule { }