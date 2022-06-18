import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  {path:"productlist",component:ProductsListComponent},
  {path:"details/:id", component:ProductDetailsComponent},
  {path:"",redirectTo:"/productlist",pathMatch:"prefix"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
