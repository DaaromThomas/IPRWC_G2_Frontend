import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { AdminService } from './admin.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit{
  response: string = '';
  constructor(private adminService: AdminService, private appComponent: AppComponent) {}

  ngOnInit(){
    this.adminService.addProductResponse$
      .subscribe((response) => {
        this.response = response;
      })
      this.appComponent.shopping = false;
  }

  public addNewProduct(product: Product) {
    this.adminService.addProductRequest(product);
  }

  public displayAddProductResponse(response: string) {
    this.response = response;
  }
}
