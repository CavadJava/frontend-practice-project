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
  showLogin = false;
  ngOnInit(): void {
    console.warn("auth-step1")
    this.sellerService.reloadSeller()
  }

  signUp(data: SignUp): void {
    console.warn("auth-step2")
    console.warn(data)
    this.sellerService.userSignUp(data);
  }

  login(data: Login): void {
    this.sellerService.login(data)
  }
   openLogin(): void {
    this.showLogin = true;
  }
  openSignUp(): void {
    this.showLogin = false;
  }

}
