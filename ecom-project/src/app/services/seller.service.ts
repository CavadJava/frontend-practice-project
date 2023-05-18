import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SignUp } from '../model/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    console.warn("seller-step1")
    this.httpClient.post('http://localhost:3000/seller',
     data, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('seller', JSON.stringify(result.body))
          this.router.navigate(['seller-home'])
        }
      });

  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
}

