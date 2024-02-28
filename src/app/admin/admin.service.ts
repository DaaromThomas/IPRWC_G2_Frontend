import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private addProductResponse = new BehaviorSubject<string>('');
  addProductResponse$ = this.addProductResponse.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  public addProductRequest(product: Product){
    return this.http.post("http://localhost:8080/addProduct", product, {responseType: 'text'})
      .subscribe((data) => {
        this.addProductResponse.next(data);
      }
    );
  }
}
