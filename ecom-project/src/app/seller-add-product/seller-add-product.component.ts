import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage: String | undefined
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

  submit(data: Product) : void {
    console.warn(data)
    this.productService.addProduct(data).subscribe(result=>{
      if(result) {
        this.addProductMessage = "Product is successfully added";
      }
      setTimeout(()=>{this.addProductMessage=undefined}, 3000)
    })
  }  
}
