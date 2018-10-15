import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BodyComponent } from './body.component';
import { BodySideNavComponent } from './bodysidenav.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './product.component';
import { ContactUsComponent } from './contactus.component';
import { AboutUsComponent } from './aboutus.component';
import { Mobile1Component } from './mobile1.component';
import { PaginationComponent } from './pagination.component';
import { WorkspaceComponent } from './workspace.component';
import { PagerService } from './_services/index';
import { HttpModule } from '@angular/http'

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
    AboutUsComponent,
    Mobile1Component,
    PaginationComponent,
    WorkspaceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
