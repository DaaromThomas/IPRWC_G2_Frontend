import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit{
  response: string = '';
  constructor(private adminService: AdminService) {}

  ngOnInit(){
    this.adminService.addProductResponse$
      .subscribe((response) => {
        this.response = response;
      })
  }

  public addNewProduct(product: Product) {
    this.adminService.addProductRequest(product);
  }

  public displayAddProductResponse(response: string) {
    this.response = response;
  }
}
