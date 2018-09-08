import { Component } from '@angular/core';
import { PRODUCT_LIST } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
//   styleUrls: ['./app.component.css']
})
export class ProductComponent {
  title = 'Test-app';
  fullImagePath;
  action2 = 'product';
  products = PRODUCT_LIST;
  constructor() {
    this.fullImagePath = '/img/img1.jpg';
  }
  setAction(action){
    this.action2 = action;
  }
}
