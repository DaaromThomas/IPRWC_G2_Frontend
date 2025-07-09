import { Component } from '@angular/core';
import { OrderService } from './order.service';
import { Order } from '../models/Order';
import { error } from 'console';
import { SourceTextModule } from 'vm';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.less'
})
export class OrderComponent {
  public error: string = '';

  constructor(
    private orderService: OrderService,
    private router: Router
  ){}

  public sendOrder(order: Order){
    this.orderService.sendOrderRequest(order)
    .subscribe((data) => {
      if(data === 'Order saved succesfully'){
        this.router.navigate(['/home']);
      }
      if(data === 'Error in saving order'){
        this.error = "An unexpected error has occured";
      }
    }
    );
  }
}
