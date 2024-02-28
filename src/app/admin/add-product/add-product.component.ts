import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../model/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.less'
})
export class AddProductComponent {
  @Output() product = new EventEmitter<Product>(); 
  productForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required],
    cost: ['', [Validators.required, Validators.min(0)]]
  });
  constructor(private fb: FormBuilder) { }


  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      console.log(productData);
      const product: Product = new Product(productData.name, productData.image, productData.cost);
      this.product.emit(product);
    } else {
      // Form is invalid, handle errors or show validation messages
    }
  }
}
