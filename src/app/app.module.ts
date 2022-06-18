import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsModule } from './products/products.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCacheService } from './cache.service';
import {cacheInterceptor} from './Interceptors/cache.Interceptor';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:cacheInterceptor,
      multi:true
    },
    HttpCacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
