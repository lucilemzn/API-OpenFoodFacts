import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-allergen',
  templateUrl: './allergen.component.html',
  styleUrls: ['./allergen.component.css']
})
export class AllergenComponent implements OnInit {

  fetchedData = [];
  filteredData = [];
<<<<<<< HEAD
=======
  randomArray = [];
>>>>>>> 71c5c3b1b68e03427dad65037541e79ecf570f13

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('https://world.openfoodfacts.org/allergens.json').subscribe(data => {
      this.fetchedData = data.tags;
      console.log(this.fetchedData);
      this.filteredData = this.filtre(this.fetchedData);
      this.getFrenchRandomDataList(this.filteredData);
      console.log(this.randomArray);
    });
  }


<<<<<<< HEAD
=======
  getFrenchRandomDataList(data: Array<any>){
    for (let index = 0; index < 10; index++) {
      this.randomArray[index] = this.getRandomData(data);
    }
  }

>>>>>>> 71c5c3b1b68e03427dad65037541e79ecf570f13
  filtre(data: Array<any>): Array<any> {
    // tslint:disable-next-line: no-string-literal
    return data.filter(current => current['name'].substr(0, 2).toLowerCase() === 'fr');
  }

<<<<<<< HEAD
=======
  getRandomData(data: Array<any>): Array<any> {
    return data[Math.floor(Math.random() * data.length)];
  }

>>>>>>> 71c5c3b1b68e03427dad65037541e79ecf570f13
}
