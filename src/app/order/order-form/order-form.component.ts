import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { Order } from '../../models/Order';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.less'
})
export class OrderFormComponent {
  @Output() order = new EventEmitter<Order>();

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ){}

  loginForm: FormGroup = this.formBuilder.group({
    customer: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required]
  });

  public emitOrder(){
    const formData = this.loginForm.value;
    const order: Order = new Order('Product order', formData.customer, this.cartService.productsInCart, formData.email, formData.address);
    this.order.emit(order);
  }


}
