import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allergen',
  templateUrl: './allergen.component.html',
  styleUrls: ['./allergen.component.css']
})
export class AllergenComponent implements OnInit {

  fetchedData = [];
  filteredData = [];
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('https://world.openfoodfacts.org/allergens.json').subscribe(data => {
      this.fetchedData = data.tags;
      console.log(this.fetchedData);
      this.filteredData = this.filtre(this.fetchedData);
    });

  }

  filtre(data: Array<any>): Array<any> {
    return data.filter(current => current['name'].substr(0, 2).toLowerCase() === 'fr');
  }


}
