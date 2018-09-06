import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile1',
  templateUrl: './mobile1.component.html'
//   styleUrls: ['./app.component.css']
})
export class Mobile1Component {
  title = 'Test-app';
  constructor() {
    this.fullImagePath = '/img/img1.jpg';
  }
}

