import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branddet',
  templateUrl: './branddet.component.html',
  styleUrls: ['./branddet.component.css']
})
export class BranddetComponent implements OnInit {

  brandData: any = [];
  randomArray = [];

  constructor(private http: HttpClient) { }



  ngOnInit(): void {
    this.http.get<any>('https://world.openfoodfacts.org/brands.json').subscribe(data => {
      this.brandData = data.tags;
      this.getFrenchRandomDataList(this.brandData);
      console.log(this.brandData);
    });
  }

  getFrenchRandomDataList(data: Array<any>){
    for (let index = 0; index < 50; index++) {
      this.randomArray[index] = this.getRandomData(data);
    }
  }
  getRandomData(data: Array<any>): Array<any> {
    return data[Math.floor(Math.random() * data.length)];
  }
}
