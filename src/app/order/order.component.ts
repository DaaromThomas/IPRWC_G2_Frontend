import { Component } from '@angular/core';
import { OrderService } from './order.service';
import { Order } from '../models/Order';
import { error } from 'console';
import { SourceTextModule } from 'vm';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.less'
})
export class OrderComponent {

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder
  ){}

  public sendOrder(order: Order){
    this.orderService.sendOrderRequest(order)
    .subscribe((data) => {
      if(data === 'Order saved succesfully'){
        console.log(data);
      }
      if(data === 'Error in saving order'){
        console.log(data);
      }
    }, (error) => {
        console.log(error);
    }
    );
  }
}
