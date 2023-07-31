import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuType: string = 'default';
  sellerName: string = '';
  searchResult: undefined | Product[];
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log('in seller area')
          this.menuType = 'seller'
          if(localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name
          }
        } else {
          console.log('outside seller')
          this.menuType = 'default'
        }
      }
    })
  }
  logout () {
    localStorage.removeItem('seller')
    this.router.navigate(['/seller-auth'])
  }

  searchProducts(query: KeyboardEvent){
    if(query) {
      const element = query.target as HTMLInputElement
      this.productService.searchProducts(element.value).subscribe((result)=>{
        this.searchResult = result;
        console.log(result)
      })
    }
  }


}
