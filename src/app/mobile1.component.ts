import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PRODUCT_LIST } from './product.model';

@Component({
  selector: 'app-mobile1',
  templateUrl: './mobile1.component.html'
//   styleUrls: ['./app.component.css']
})
export class Mobile1Component implements OnInit,OnChanges {
  title = 'Test-app';
  fullImagePath;
  @Input("product-id") productId;
  prod = PRODUCT_LIST[0];
  constructor() {
    this.fullImagePath = '/img/img1.jpg';
  }
  ngOnInit(): void {
    if(this.productId) {
      this.prod = PRODUCT_LIST.find( _prod => _prod.code === this.productId );
    }
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(simpleChanges);
    let productIdChanges = simpleChanges["productId"];
    if(productIdChanges && !productIdChanges.firstChange) {
      this.prod = PRODUCT_LIST.find( _prod => _prod.code === this.productId );
    }
    console.log(productIdChanges)
  }
}

