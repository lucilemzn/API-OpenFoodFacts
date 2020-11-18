import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  allergenUrl = 'https://world.openfoodfacts.org/data/taxonomies/allergens.json';
  constructor(private http: HttpClient) {}

}
