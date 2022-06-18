import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseurl="https://captello.firebaseio.com/products";

  getAllProducts(){
    return this.http.get<Product[]>(this.baseurl+".json")
  }

  getProductbyID(id:number){
    return this.http.get<Product>(this.baseurl+"/"+id+".json");

  }


  constructor(public http:HttpClient) { }
}
