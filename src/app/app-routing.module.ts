import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllergenComponent } from './allergen/allergen.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { BrandComponent } from './brand/brand.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ProductsComponent } from './products/products.component';
import {IngredientdetComponent} from './ingredientdet/ingredientdet.component';
import { AllergendetComponent } from './allergendet/allergendet.component';
import { BranddetComponent } from './branddet/branddet.component';

const routes: Routes = [
  { path : '', component : BodyComponent},
  { path : 'Products', component : ProductsComponent},
  { path : 'Allergens', component : AllergenComponent},
  { path : 'Brands', component : BrandComponent},
  { path : 'Ingredients', component : IngredientComponent},
  { path : 'Contact', component : ContactComponent},
  { path : 'Ingredientdet', component : IngredientdetComponent},
  { path : 'Allergendet', component : AllergendetComponent},
  { path : 'Branddet', component : BranddetComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
