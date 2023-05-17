import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { SellerService } from './services/seller.service';

// export const authGuard: CanActivateFn = (route, state) => {
  // return false;
// };

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate {
  constructor(
    private sellerService: SellerService
  ) { 
    console.warn("guard-step1")
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      console.warn("guard-step2"+this.sellerService.isSellerLoggedIn.value)
    return this.sellerService.isSellerLoggedIn;
  }
}
