import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../model/Login';
import { SignUp } from '../model/SignUp';

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

  login(data: Login): void {
    console.warn("auth-step3")
    console.warn(data)
    this.httpClient.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`
      , { observe: 'response' }).subscribe((result: any) => {
        console.log(result)
        if (result && result.body && result.body.length > 0) {
          console.log("user logged in")
          localStorage.setItem('seller', JSON.stringify(result.body))
          this.router.navigate(['seller-home'])
        } else {
          console.log("login failed")
        }
      })
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
}

