import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { TokenParsingComponent } from './entertainments/token-parsing/token-parsing.component';
import { EntertainmentsComponent } from './entertainments/entertainments.component';
import { InterestPictureComponent } from './entertainments/interest-picture/interest-picture.component';
import { MovieListComponent } from './entertainments/movies/movie-list/movie-list.component';
import { MovieAddComponent } from './entertainments/movies/movie-add/movie-add.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: SellerAuthComponent,
    path: 'seller-auth'
  },
  {
    component: EntertainmentsComponent,
    path: 'entertainments'
  },
  {
    component: InterestPictureComponent,
    path: 'interest-picture'
  },
  {
    component: TokenParsingComponent,
    path: 'token-parsing'
  },
  {
    component: SellerHomeComponent,
    path: 'seller-home',
    canActivate: [authGuard]
  },
  {
    component: SellerAddProductComponent,
    path: 'seller-add-product',
    canActivate: [authGuard]
  },
  {
    component: SellerUpdateProductComponent,
    path: 'seller-update-product/:id',
    canActivate: [authGuard]
  },
  {
    component: MovieListComponent,
    path: 'entertainments/movies',
    canActivate: [authGuard]
  },
  {
    component: MovieAddComponent,
    path: 'entertainments/movies/movie-add',
    canActivate: [authGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
