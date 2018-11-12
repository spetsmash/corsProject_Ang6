import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    return this.http.put('https://dummyproject-b795c.firebaseio.com/recipes.json', this.recipeService.getRecipe());
  }

  getRecipes() {

    const token = this.authService.getToken();

    // this.http.get<Recipe[]>('https://dummyproject-b795c.firebaseio.com/recipes.json?auth=' + token).pipe(map(
    this.http.get<Recipe[]>('https://dummyproject-b795c.firebaseio.com/recipes.json?auth=' + token, {
      observe: 'body',
      responseType: 'json'
    }).pipe(map(
      (recipes) => {
      console.log(recipes);
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
