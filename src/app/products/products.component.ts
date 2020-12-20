import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  name: any;
  searchResult: any;
  myRandomProduct: any;
  headerDict = {
    'UserAgent': 'FunIsenProject - Windows - Version 1.0 - localhost:4200/Products'
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  constructor( http: HttpClient) { }

  getRandomProductDetails(http: HttpClient){
    this.myRandomProduct = this.getRandomProduct();
    console.log(this.myRandomProduct);
    http.get('https://world.openfoodfacts.org/api/v0/product/0${this.myRandomProduct}.json')
    .subscribe(
      (data) => {
        if(data == HttpErrorResponse){
          console.log(data);
        }else{
          this.searchResult = data;
          console.log(this.searchResult)
          console.log(this.searchResult.product.image_front_url)
        }
      }
    );
  }

  getRandomProduct() {
    return Math.floor(Math.random() * 1000000000000);
  }

  ngOnInit(): void {
  }

}
