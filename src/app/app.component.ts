import { Component } from '@angular/core';
import { PRODUCT_LIST } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test-app';
  action = 'home';
  productList = PRODUCT_LIST;
  // action2 = 'product';
  setAction(action){
    this.action= action;
    // this.action2 = action;

  }
}
