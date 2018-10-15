import { Component } from '@angular/core';
import { PRODUCT_LIST } from './product.model';
import { PagerService } from './_services/pager.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  title = 'Test-app';
  fullImagePath;
  action2 = 'product';
  products = PRODUCT_LIST;
    private allItems: any;
    constructor(private http: Http, private pagerService: PagerService) {
    this.fullImagePath = '/img/img1.jpg';
  }
    pager: any = {};
    pagedItems: any[];

    ngOnInit() {
        this.http.get('./dummy-data.json')
            .subscribe((data) => {
                this.allItems = data;
                this.setPage(1);
            });
    }
    setPage(page: number) {
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    setAction(action){
      this.action2 = action;
    }
}
  

