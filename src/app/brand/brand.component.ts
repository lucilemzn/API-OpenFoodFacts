import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandData: any = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('https://world.openfoodfacts.org/brands.json').subscribe(data => {
      this.brandData = data;
      console.log(this.brandData);
    });
  }

}
