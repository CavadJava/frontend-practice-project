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
  updateProduct(data: Product) {
    return this.httpClient.put<Product>(`http://localhost:3000/products/${data.id}`,data)
  }
  getProductList() :Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/products");
  }
  deleteProductById(id:number) {
    return this.httpClient.delete(`http://localhost:3000/products/${id}`);
  }
  getProductById(id:string) {
    return this.httpClient.get<Product>(`http://localhost:3000/products/${id}`);
  }
}
