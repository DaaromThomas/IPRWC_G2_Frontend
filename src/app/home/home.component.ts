import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit{

  constructor(
    private appComponent: AppComponent
  ){}

  ngOnInit(): void {
    this.appComponent.setShopping(true);
  }

}
