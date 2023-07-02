import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{

  productList: Product[] | undefined;
  productMessage: string | undefined
 
  constructor(private productService: ProductService, private router: Router) {
    this.productService = productService;
  }

  ngOnInit() : void {
    this.list();
  }
  deleteProductById(id:number) {
    this.productService.deleteProductById(id).subscribe((result)=> {
      if(result &&result!=null) {
        this.productMessage = "Product is deleted";
      }
      this.list();
    })
  }
  list(){
    this.productService.getProductList().subscribe((result)=>{
      if(result) {
        this.productList = result
        console.warn(result);
      }
    })
  }
}