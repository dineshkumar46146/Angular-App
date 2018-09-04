import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BodyComponent } from './body.component';
import { BodySideNavComponent } from './bodysidenav.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './product.component';
import { ContactUsComponent } from './contactus.component';
import { AboutUsComponent } from './aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    BodySideNavComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ContactUsComponent,
    AboutUsComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
