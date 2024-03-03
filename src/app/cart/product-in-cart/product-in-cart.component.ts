import { Component, Input, OnInit } from '@angular/core';
import { ProductInShoppingCart } from '../../models/ProductInShoppingCart';
import { Product } from '../../models/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrl: './product-in-cart.component.less'
})
export class ProductInCartComponent implements OnInit{
  @Input() productData!: ProductInShoppingCart;
  public product!: Product;
  public quantity!: number;
  numberArray: number[] = [];

  constructor(
    private cartService: CartService
  ){}

  ngOnInit(){
    this.fillNumberArray();
    this.product = this.productData.product;
    this.quantity = this.productData.quantity;
  }

  changeQuantity(newQuantity: number){
    this.cartService.changeQuantity(this.product, newQuantity);
  }
  
  deleteThisFromCart(){
    this.cartService.removeFromCart(this.productData.product);
    this.quantity = 0;
  }

  private fillNumberArray(){
    for (let i = 1; i <= 100; i++) {
      this.numberArray.push(i);
    }
  }
}
