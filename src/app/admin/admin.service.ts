import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  public addProductRequest(product: Product){
    // return this.http.post("", product, {responseType: 'text'})
    //   .subscribe((data) => {
          
    //   })
    console.log("AddProductRequest(): " + product);
  }
}
