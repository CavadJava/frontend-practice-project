import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{

  productList: Product[] | undefined;
 
  constructor(private productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit() : void {
    this.productService.getProductList().subscribe((result)=>{
      if(result) {
        this.productList = result
        console.warn(result);
      }
    })
  }
}