import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router'
import { SignUp } from '../model/data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
  constructor(private sellerService:SellerService, private router: Router){}
  
  ngOnInit(): void {
    console.warn("auth-step1")
    this.sellerService.reloadSeller()
  }

  signUp(data:SignUp):void{
    console.warn("auth-step2")
    console.warn(data)
    this.sellerService.userSignUp(data);
  }

}
