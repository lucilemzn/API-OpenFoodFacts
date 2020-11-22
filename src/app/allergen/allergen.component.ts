import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allergen',
  templateUrl: './allergen.component.html',
  styleUrls: ['./allergen.component.css']
})
export class AllergenComponent implements OnInit {

  fetchedData: any = [];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get<any>('https://world.openfoodfacts.org/allergens.json').subscribe(data => {
      this.fetchedData = data;
      console.log(this.fetchedData);
    });
  }

}

