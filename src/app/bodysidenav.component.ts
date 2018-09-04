import { Component } from '@angular/core';
import { PRODUCT_LIST } from './product.model';

@Component({
  selector: 'app-bodysidenav',
  templateUrl: './bodysidenav.component.html'
//   styleUrls: ['./app.component.css']
})
export class BodySideNavComponent {
  title = 'Test-app';
  productList = PRODUCT_LIST;
}
