import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.less'
})
export class AddProductComponent {
  @Output() product = new EventEmitter<Product>(); 
  public name!: string;
  public imageData!: string;
  public cost!: number;

  public nameError: boolean = false;
  public imageError: boolean = false;
  public costError: boolean = false;

  public emitProduct(){
    if(!this.checkData()){
      return;
    }

    const product: Product = new Product(this.name, this.imageData, this.cost);
    this.product.emit(product);
  }

  private checkData(): boolean{
    if(!this.checkName()){
      return false;
    }
    if(!this.checkImage()){
      return false;
    }
    if(!this.checkCost()){
      return false;
    }
    return true;
  }

  private checkName(): boolean{
    if (typeof this.name !== 'string') {
      return false;
    }
    if(this.name === null || this.name === undefined){
      return false;
    }
    return true;
  }

  private checkImage(): boolean{
    if (typeof this.imageData !== 'string') {
      return false;
    }
    if(this.imageData === null || this.imageData === undefined){
      return false;
    }
    return true;
  }

  private checkCost(): boolean{
    if (typeof this.cost !== 'number') {
      return false;
    }
    if(this.cost === null || this.cost === undefined || this.cost < 0){
      return false;
    }
    return true;
  }
}
