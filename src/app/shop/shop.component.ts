import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.less'
})
export class ShopComponent implements OnInit{

  constructor(
    private appComponent: AppComponent
  ){}

  ngOnInit(): void {
    this.appComponent.setShopping(true);
  }

}
