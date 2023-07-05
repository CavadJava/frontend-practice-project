import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, map, Observable, take, tap } from 'rxjs';
import { SellerService } from './services/seller.service';

// export const authGuard: CanActivateFn = (route, state) => {
  // return false;
// };

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {
  constructor(
    private router: Router,
    private sellerService: SellerService
  ) { 
    console.warn("guard-step1")
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      // console.warn("guard-step2"+this.sellerService.isSellerLoggedIn.value);
    // return this.sellerService.isSellerLoggedIn;
    let logged = this.sellerService.isSellerLoggedIn;
    if(logged) {
      return logged;
    }
    console.log("seller-auth by auth")
    this.router.navigate(["seller-home"]);
    return new BehaviorSubject<boolean>(true);
  }
}
