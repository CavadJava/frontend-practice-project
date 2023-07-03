import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit{
  updateProductMessage :String | undefined
  constructor() {
  }

  ngOnInit() : void {

  }

  submit(data:Product) {
    console.log("update product page");
  }
}
