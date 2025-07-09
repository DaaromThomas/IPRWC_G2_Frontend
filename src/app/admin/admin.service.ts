import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { error } from 'console';

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
    return this.http.post("http://85.215.60.238:8080/addProduct", product, {responseType: 'text'})
      .subscribe((data) => {
        this.sendResponse(data);
      }, (error) => {
        this.sendResponse(error.error)
      }
    );
  };

  private sendResponse(message: string){
    this.addProductResponse.next(message);
    setTimeout(() => {
      this.addProductResponse.next('');
    }, 5000);
  }
}
