import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit{
  productData: undefined | Product;
  updateProductMessage :String | undefined
  constructor(private route: ActivatedRoute,
    private productService: ProductService) {
  }

  ngOnInit() : void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.warn(productId);
    productId && this.productService.getProductById(productId).subscribe((result)=>{
      console.warn(result);
      this.productData = result;
    })

  }

  submit(data:Product) {
    if(this.productData) {
      data.id = this.productData.id
    }
    this.productService.updateProduct(data).subscribe((result)=>{
      if(result) {
        this.updateProductMessage = "Product has updated"
      }
    })
    console.log(data);
  }
}
