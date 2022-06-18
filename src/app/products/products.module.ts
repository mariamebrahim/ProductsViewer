import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],exports:[ProductsListComponent,ProductDetailsComponent]
})
export class ProductsModule { }
