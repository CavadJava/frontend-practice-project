import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../model/Login';
import { SignUp } from '../model/SignUp';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  @Output()
  isLoginError = new EventEmitter<boolean>();

  constructor(private httpClient: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    console.warn("seller-step1")
    this.httpClient.post('http://localhost:3000/seller',
      data, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          localStorage.setItem('seller', JSON.stringify(result.body))
          this.router.navigate(['seller-home'])
          this.isSellerLoggedIn.next(true)
        }
      });

  }

  userLogin(data: Login): any {
    console.warn("auth-step3")
    console.warn(data)
    return this.httpClient.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`
      , { observe: 'response' });
  }

  reloadSeller() {
    if (localStorage && localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
}

