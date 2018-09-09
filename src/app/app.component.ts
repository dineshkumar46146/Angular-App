import { Component } from '@angular/core';
import { PRODUCT_LIST } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Winners';
  action = 'home';
  selectedProduct: string;
  productList = PRODUCT_LIST;

  mySelectedMenu(selectedText) : void {
    console.log("my selected text : ",selectedText);
    this.action= selectedText[0];
    this.selectedProduct= selectedText[1];
  }
  setAction (selectedText, productCode) {
    this.action = selectedText;
    this.selectedProduct = productCode;
    console.log(this.selectedProduct);
  }
}
