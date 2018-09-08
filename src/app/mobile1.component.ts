import { Component } from '@angular/core';
import { PRODUCT_LIST } from './product.model';

@Component({
  selector: 'app-mobile1',
  templateUrl: './mobile1.component.html'
//   styleUrls: ['./app.component.css']
})
export class Mobile1Component {
  title = 'Test-app';
  fullImagePath;
  prod = PRODUCT_LIST[1]
  constructor() {
    this.fullImagePath = '/img/img1.jpg';
  }
}

