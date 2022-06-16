import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(public prodSer:ProductService) { }
  prods:Product[]=[];
  ngOnInit(): void {
    this.prodSer.getAllProducts().subscribe(a=>{
      this.prods=a;
    })
  }

}
