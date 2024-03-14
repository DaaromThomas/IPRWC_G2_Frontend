import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent {
  @Output() product = new EventEmitter<Product>();
  @Input() response: string = '';
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', [Validators.required, this.isUrlValidator()]],
      cost: ['', [Validators.required, Validators.min(0.1)]]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      console.log(productData);
      const product: Product = new Product(productData.name, productData.image, productData.cost);
      this.product.emit(product);
    } else {
      return;
    }
  }

  public emptyValues() {
    this.productForm.reset();
  }

  public checkValues() {
    const { name, image, cost } = this.productForm.value;
    return !name && !image && !cost;
  }

  isUrlValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

      if (!urlPattern.test(control.value)) {
        return { invalidUrl: true };
      }

      return null;
    };
  }
}
