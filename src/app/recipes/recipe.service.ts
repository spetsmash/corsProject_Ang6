import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel',
      'data:image/jpeg;base64,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',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big fat burger',
      'What else we need to say?',
      'data:image/jpeg;base64,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',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor (private shopppingListService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shopppingListService.addNewIngredients(ingredients);
  }

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];

  }
}
