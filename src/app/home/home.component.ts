import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';


import { ApiService } from '../Service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    if (this.api.isAuthenticated) {
      this.api.getProducts().subscribe(
        res => {
          this.products = res.oblist;
        }
      );
    }
  }

  addToCart(e) {
    this.api.addToCart(e).subscribe(res => {
      console.log(res);
    })
  }
}
