import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../model/Product';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit{
  updateProductMessage :String | undefined
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() : void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.warn(productId)

  }

  submit(data:Product) {
    console.log("update product page");
  }
}
