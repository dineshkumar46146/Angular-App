import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
//   styleUrls: ['./app.component.css']
})
export class ProductComponent {
  title = 'Test-app';
  action2 = 'product';
  setAction(action){
   
    this.action2 = action;
    
  }
  constructor() {
    this.fullImagePath = '/img/img1.jpg';
    this.fullImagePath = '/img/img1.jpg';
  }
}
