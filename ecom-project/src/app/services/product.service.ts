import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  addProduct(data: Product) {
    return this.httpClient.post("http://localhost:3000/products",data)
  }
  getProductList() :Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/products");
  }
}