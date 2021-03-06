import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
// import {ShoppingListService} from '../../shopping-list/shopping-list.service';
// import {Ingredient} from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe: Recipe;
id: number;

  constructor(private recipeService: RecipeService,
              private sLService: ShoppingListService,
              private route: ActivatedRoute,
              private router: Router) { }



  addToShoppingList() {
    console.log(this.recipe.ingredients);
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.sLService.addNewIngredients(this.recipe.ingredients);
  }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecire(this.id);
    this.router.navigate(['/recipes']);
  }

}
