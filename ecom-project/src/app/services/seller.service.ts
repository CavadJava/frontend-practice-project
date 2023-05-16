import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../model/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private httpClient: HttpClient) { }
  userSignUp(data: SignUp) {
    console.warn('service called')
    return this.httpClient.post('http://localhost:3000/seller',data)
  }
}
