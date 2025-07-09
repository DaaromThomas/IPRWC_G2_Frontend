import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(
    private http: HttpClient
  ) { }

  public sendOrderRequest(order: Order){
    return this.http.post("http://85.215.60.238:8080/addOrder", order, { responseType: 'text' });
  }
}
