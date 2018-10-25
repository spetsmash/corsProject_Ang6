import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
// import {ShoppingListService} from '../../shopping-list/shopping-list.service';
// import {Ingredient} from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService,
              private sLService: ShoppingListService) { }

  addToShoppingList() {
    console.log(this.recipe.ingredients);
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.sLService.addNewIngredients(this.recipe.ingredients);
  }
  ngOnInit() {
  }

}
