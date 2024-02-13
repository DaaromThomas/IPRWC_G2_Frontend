import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit{
  title = 'IPRWC_G2_Frontend';

  constructor(private router: Router){}

  ngOnInit(){
    this.router.navigate(['/register']);
  }
}
