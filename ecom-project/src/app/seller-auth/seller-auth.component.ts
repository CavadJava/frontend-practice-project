import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router'
import { SignUp } from '../model/SignUp';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/Login';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  constructor(private sellerService: SellerService, private router: Router, private httpClient: HttpClient) { }
  showLogin: boolean = false;
  authError: string = '';
  ngOnInit(): void {
    this.sellerService.reloadSeller()
  }

  signUp(data: SignUp): void {
    this.sellerService.userSignUp(data);
  }

  login(data: Login): void {
    this.sellerService.userLogin(data)
    .subscribe((result: any) => {
      console.log(result)
      if (result && result.body && result.body.length>0) {
        console.log("user logged in")
        localStorage.setItem('seller', JSON.stringify(result.body))
        this.authError = "";
        this.router.navigate(['/seller-home'])
      } else {
        this.authError = "Email or password is not correct";
        console.warn("login failed")
      }
    })
  }
  openLogin(): void {
    this.showLogin = true;
  }
  openSignUp(): void {
    this.showLogin = false;
  }

}
