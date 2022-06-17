import { Component, OnInit,OnChanges } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Category } from 'src/app/_models/category';
import { Product } from 'src/app/_models/product';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(public prodSer:ProductService) { }
  prods:Product[]=[];
  categs:string[]=[];
  AllprodCount:number=0;
  SimpleProdCount:number=0;
  ComplexProdCount:number=0;
  ngOnInit(): void {
    this.prodSer.getAllProducts().subscribe(a=>{
      this.prods=a;
      this.categs=this.getCategoriesdistinct();
      this.AllprodCount=this.prods.length;
      this.SimpleProdCount=this.getsimplecategorycount();
      this.ComplexProdCount=this.getComplexcategorycount();
    }); 

  
  }
 
  getSimpleProds(){
    return  this.prodSer.getAllProducts().subscribe(a=>{
      this.prods=a.filter(a=>a.category=="simple");
    }); 
  }

  getComplexProds(){
    return  this.prodSer.getAllProducts().subscribe(a=>{
      this.prods=a.filter(a=>a.category=="complex");
    }); 
  }

  getAllProds(){
    return  this.prodSer.getAllProducts().subscribe(a=>{
      this.prods=a;
    }); 
  }


  getProdsCountByCategory(category:string){
    return this.prods.filter(a=>a.category==category).length;
  }
 
  getsimplecategorycount(){
    return this.prods.filter(a=>a.category=="simple").length;
  }

  getComplexcategorycount(){
    return this.prods.filter(a=>a.category=="complex").length;
  }

  getCategoriesdistinct(){
    return this.prods.map(a=>a.category).filter((value,index,array)=>array.indexOf(value)==index).splice(0,2);

  }










}
