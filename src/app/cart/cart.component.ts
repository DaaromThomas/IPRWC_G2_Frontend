import { Component } from '@angular/core';
import { ProductInShoppingCart } from '../models/ProductInShoppingCart';
import { CartService } from './cart.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.less'
})
export class CartComponent {
  productsInCart: ProductInShoppingCart[] = [];
  numberOfProductsInCart: number = 0;
  public cost: number = 0;

  constructor(
    private cartService: CartService, 
    private appComponent: AppComponent,
    private router: Router
  ) {}

  ngOnInit() {
    this.appComponent.setShopping(true);

    this.cartService
      .all()
      .subscribe((data: ProductInShoppingCart[]) => {
        this.productsInCart = data;
        this.numberOfProductsInCart = this.calculateTotalQuantity(data);        
      });

      this.cartService.cost().subscribe((newCost: number) => {
        this.cost = newCost;
      });
  }



  private calculateTotalQuantity(cartItems: ProductInShoppingCart[]): number {
    let baseNumber: number = 0;
    for(let index in cartItems){
      let cartItem = cartItems[index];
      baseNumber = baseNumber + Number(cartItem.quantity);
    }
    return baseNumber;
  }

  error: String = '';
  orderProducts(){
    if(this.numberOfProductsInCart !== 0){
      this.error = '';
      this.router.navigate(['/order']);
    } else {
      this.error = 'No products in cart';
      setTimeout(() => {
        this.error = '';
      }, 2000);
    }
    
  }
}
