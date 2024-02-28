import { Component } from '@angular/core';
import { Product } from '../model/product';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less'
})
export class AdminComponent {

  constructor(
    private adminService: AdminService
  ){}

  public addNewProduct(product: Product){
    this.adminService.addProductRequest();
  }
}
