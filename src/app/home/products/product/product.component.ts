import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { CartService } from '../../../cart/cart.service';

@Component({
  selector: 'app-home-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.less'
})
export class ProductComponent {
  @Input() product!: Product;
  constructor(
    private cartService: CartService
  ){}

  addToCart(){
    this.cartService.addToCart(this.product);
  }
}
