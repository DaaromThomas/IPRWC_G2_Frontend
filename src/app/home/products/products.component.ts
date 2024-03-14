import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from '../../models/product';
import { ShopService } from '../../shop/shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.less'
})
export class ProductsComponent {
  public allProducts: Product[] = [];
  public productsInHomeScreen: Product[] = [];
  private numberOfProductsOnHomeScreen = 5;
  private selectedIndices: number[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shopService.products$.subscribe((products) => {
      this.allProducts = products;
    });
    this.shopService.getProducts();
  }

  ngAfterViewInit(){
    this.getProducts()
  }

  getProducts() {
    this.productsInHomeScreen = [];
  
    for (let i = 0; i < Math.min(5, this.allProducts.length); i++) {
      const product: Product = new Product(this.allProducts[i].name, this.allProducts[i].image, this.allProducts[i].cost)
      this.productsInHomeScreen.push(product);
    }
    console.log(this.productsInHomeScreen)
  }
}
