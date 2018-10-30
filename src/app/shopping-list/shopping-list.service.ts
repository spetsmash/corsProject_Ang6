import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientsChanges =  new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  addNewIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanges.next(this.ingredients.slice());
  }
}
