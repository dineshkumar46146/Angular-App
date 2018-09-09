import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input("title-info") titleInfo: string;
  @Input("product-dtl") prodDtl: string;
  @Output() menuSelection: EventEmitter<[string, string]> = new EventEmitter<[string, string]>();

  shareMenuSelection(selectedMenu: string, action: string)  {
    this.menuSelection.emit([selectedMenu, action]);
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(simpleChanges);
    let productIdChanges = simpleChanges["titleInfo"];
    if(productIdChanges && !productIdChanges.firstChange) {
      if( (productIdChanges.currentValue.indexOf('PROD')) != -1 ) {
        this.shareMenuSelection('mobile1', productIdChanges.currentValue);
      } else{
        this.shareMenuSelection('home', null);
      }
    }
    console.log(productIdChanges)
  }
}
