import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { Order } from '../../models/Order';
import { CartService } from '../../cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.less'
})
export class OrderFormComponent {
  @Output() order = new EventEmitter<Order>();
  @Input() error!: string;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private router: Router
  ){}

  orderForm: FormGroup = this.formBuilder.group({
    customer: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    adress: ['', Validators.required]
  });

  public emitOrder(){
    const formData = this.orderForm.value;
    console.log("Address: " + formData.adress);
    console.log(this.cartService.productsInCart)
    const order: Order = new Order(this.generateUUID(), 'Product order', formData.customer, this.cartService.productsInCart, formData.email, formData.adress);
    this.order.emit(order);
    this.router.navigate(['/home'])
  }

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
