import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ShopComponent } from './shop.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';


@NgModule({
  declarations: [
    ShopComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],exports: [ ShopComponent]
})
export class ShopModule { }