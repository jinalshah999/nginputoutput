import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SidebarfilterComponent } from './sidebarfilter.component';
import { ProductdataService } from './shared/productdata.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SidebarfilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
