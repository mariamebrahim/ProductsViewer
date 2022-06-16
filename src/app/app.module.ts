import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsModule } from './products/products.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
