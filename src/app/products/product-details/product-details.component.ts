import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prod:Product=new Product(0,"","","",0);

  constructor(public ac:ActivatedRoute,public prodSer:ProductService) { }
  sub:Subscription|null=null;
  sub2:Subscription|null=null;

  ngOnInit(): void {
    this.sub= this.ac.params.subscribe(a=>{
      this.sub2= this.prodSer.getProductbyID(a['id']).subscribe(s=>this.prod=s)
   })
  }
  // ngOnDestroy(): void {
  //   this.sub?.unsubscribe();
  //   this.sub2?.unsubscribe();
  //   console.log("destroy");
  // }


}
