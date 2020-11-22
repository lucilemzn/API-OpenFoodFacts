import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingreData: any = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('https://world.openfoodfacts.org/ingredients.json').subscribe(data => {
      this.ingreData = data;
      console.log(this.ingreData);
    });
  }

}
