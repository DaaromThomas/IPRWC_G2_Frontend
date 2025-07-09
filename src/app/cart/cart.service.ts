import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Product } from '../models/product';
import { ProductInShoppingCart } from '../models/ProductInShoppingCart';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productsInCart: ProductInShoppingCart[] = [];
  private productsInCart$ = new BehaviorSubject<ProductInShoppingCart[]>([]);

  private costOfProducts: number = 0;
  private costOfProducts$ = new BehaviorSubject<number>(0);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const storedCart = localStorage.getItem('cart');
      const storedTotalCost = localStorage.getItem('totalCost');

      if (storedCart) {
        this.productsInCart = JSON.parse(storedCart);
        this.productsInCart$.next(this.productsInCart);
      }

      if (storedTotalCost) {
        this.costOfProducts = parseFloat(storedTotalCost);
        this.costOfProducts$.next(this.costOfProducts);
      }

      if(this.productsInCart.length === 0){
        this.costOfProducts = 0;
        this.costOfProducts$.next(this.costOfProducts);
      }
    }
  }

  public all(): Observable<ProductInShoppingCart[]> {
    return this.productsInCart$.asObservable();
  }

  public cost(): Observable<number>{
    return this.costOfProducts$.asObservable();
  }

  addToCart(product: Product) {
    const itemInCart = this.productsInCart.find((cartItem) => cartItem.product === product);
    
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      this.productsInCart.push(new ProductInShoppingCart(this.generateUUID(), product, 1))
    }
  
    this.costOfProducts += product.cost;
  
    this.productsInCart$.next(this.productsInCart);
    this.costOfProducts$.next(this.costOfProducts);
  
    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
    localStorage.setItem('totalCost', JSON.stringify(this.costOfProducts));
  }

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  changeQuantity(product: Product, newQuantity: number){
    const itemInCart = this.productsInCart.find((cartItem) => cartItem.product === product);
    const oldQuantity = itemInCart!.quantity;

    const cost = itemInCart!.product.cost;
    const oldValue = oldQuantity * cost;
    const newValue = newQuantity * cost;

    this.costOfProducts -= oldValue;
    itemInCart!.quantity = newQuantity;
    this.costOfProducts += newValue;

    this.productsInCart$.next(this.productsInCart);
    this.costOfProducts$.next(this.costOfProducts);

    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
    localStorage.setItem('totalCost', JSON.stringify(this.costOfProducts));
  }

  removeFromCart(product: Product) {
    const index = this.productsInCart.findIndex((cartItem) => cartItem.product === product);

    this.costOfProducts -= product.cost * this.productsInCart[index].quantity;
    this.productsInCart.splice(index, 1);
    this.productsInCart$.next(this.productsInCart);
    this.costOfProducts$.next(this.costOfProducts);

    localStorage.setItem('cart', JSON.stringify(this.productsInCart));
    localStorage.setItem('totalCost', JSON.stringify(this.costOfProducts));
  }


  emptyCart() {
    this.productsInCart = [];
    this.costOfProducts = 0;
  
    this.productsInCart$.next(this.productsInCart);
    this.costOfProducts$.next(this.costOfProducts);
  
    localStorage.removeItem('cart');
    localStorage.removeItem('totalCost');
  }

  public hasProductsInCart(){
    if(this.productsInCart.length !== 0){
      return true;
    } else {
      return false;
    }
  }
}
