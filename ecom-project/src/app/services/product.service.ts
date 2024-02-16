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
    return this.httpClient.post("http://65.21.151.194:3000/products",data)
  }
  updateProduct(data: Product) {
    return this.httpClient.put<Product>(`http://65.21.151.194:3000/products/${data.id}`,data)
  }
  getProductList() :Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://65.21.151.194:3000/products");
  }
  deleteProductById(id:number) {
    return this.httpClient.delete(`http://65.21.151.194:3000/products/${id}`);
  }
  getProductById(id:string) {
    return this.httpClient.get<Product>(`http://65.21.151.194:3000/products/${id}`);
  }
}
