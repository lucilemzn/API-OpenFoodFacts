import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredientdet',
  templateUrl: './ingredientdet.component.html',
  styleUrls: ['./ingredientdet.component.css']
})
export class IngredientdetComponent implements OnInit {

  ingreData: any = [];
  filteredIngData = [];
  randomArray = [];
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('https://world.openfoodfacts.org/ingredients.json').subscribe(data => {
      this.ingreData = data.tags;
      console.log(this.ingreData);
      this.filteredIngData = this.filtre(this.ingreData)
      this.getFrenchRandomDataList(this.filteredIngData);
    });
  }


  getFrenchRandomDataList(data: Array<any>){
    for (let index = 0; index < 50; index++) {
      this.randomArray[index] = this.getRandomData(data);
    }
  }

  filtre(data: Array<any>): Array<any> {
    // tslint:disable-next-line: no-string-literal
    return data.filter(current => current['name'].substr(0, 2).toLowerCase() === 'fr');
  }
  getRandomData(data: Array<any>): Array<any> {
    return data[Math.floor(Math.random() * data.length)];
  }
}
