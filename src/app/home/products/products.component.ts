import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ShopService } from '../../shop/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.less'
})
export class ProductsComponent {
  public allProducts: Product[] = [];
  public productsInHomeScreen: Product[] = [];
  private numberOfProductsOnHomeScreen = 5;
  private selectedIndices: number[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shopService.products$.subscribe((products) => {
      this.allProducts = products;
      this.updateProductsOnHomeScreen();
    });
  }

  private updateProductsOnHomeScreen() {
    this.productsInHomeScreen = [];
    this.selectedIndices = [];
    for (let i = 0; i < this.numberOfProductsOnHomeScreen; i++) {
      const index = this.getRandomNumber(this.allProducts.length);
      const product: Product = this.allProducts[index];
      this.productsInHomeScreen.push(product);
      this.selectedIndices.push(index);
    }
  }

  private getRandomNumber(maxNumber: number): number {
    let randomNumber: number;
    do {
      randomNumber = Math.floor(Math.random() * maxNumber);
    } while (this.selectedIndices.includes(randomNumber));

    return randomNumber;
  }
}
