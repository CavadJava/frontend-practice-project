import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private httpClient: HttpClient) { }
  userSignUp(data: any) {
    console.warn('service called')
    return this.httpClient.post('http://localhost:3000/seller',data)
  }
}
