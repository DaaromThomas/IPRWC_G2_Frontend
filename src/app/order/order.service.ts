import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  public sendOrderRequest(order: Order){
    return this.http.post("http://localhost:8080/login", order, { responseType: 'text' });
  }
}
