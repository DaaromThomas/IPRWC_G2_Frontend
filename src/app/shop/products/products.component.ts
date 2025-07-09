import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.less'
})
export class ProductsComponent implements OnInit{
  public products: Product[] = [];

  constructor(
    private shopService: ShopService
  ){}

  ngOnInit(){
    this.shopService.products$.subscribe((products) => {
      this.products = products;
    });
    this.shopService.getProducts();
  }

}
