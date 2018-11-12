import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map} from 'rxjs/operators';
import * as firebase from 'firebase';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    // // return this.http.put('https://dummyproject-b795c.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipe(), {
    // return this.http.put('https://dummyproject-b795c.firebaseio.com/recipes.json', this.recipeService.getRecipe(), {
    //   // observe: 'events'
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: new HttpHeaders().set('Authorization', 'Bearer slrosdvdfvkpg')
    //   // headers: new HttpHeaders().set('Authorization', 'Bearer slrosdvdfvkpg').append()
    // });

    const req = new HttpRequest('PUT', 'https://dummyproject-b795c.firebaseio.com/recipes.json',
      this.recipeService.getRecipe(), {
        reportProgress: true,
        // params: new HttpParams().set('auth', token)
    });
    return this.http.request(req);
  }

  getRecipes() {

    const token = this.authService.getToken();

    // this.http.get<Recipe[]>('https://dummyproject-b795c.firebaseio.com/recipes.json?auth=' + token).pipe(map(
    // this.http.get<Recipe[]>('https://dummyproject-b795c.firebaseio.com/recipes.json?auth=' + token, {
    this.http.get<Recipe[]>('https://dummyproject-b795c.firebaseio.com/recipes.json', {
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
