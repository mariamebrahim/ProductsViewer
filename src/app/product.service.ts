import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl="https://captello.firebaseio.com/products.json";

  getAllProducts(){
    return this.http.get<Product[]>(this.baseurl)
  }



  constructor(public http:HttpClient) { }
}
