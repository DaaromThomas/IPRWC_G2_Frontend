import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private loginErrorSubject = new BehaviorSubject<Product[]>([]);
  loginError$ = this.loginErrorSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getProducts(){
    return this.http.get<Product[]>("http://localhost:8080/products")
      .subscribe((products) => {
        this.loginErrorSubject.next(products);
      }
    );
  }

}
