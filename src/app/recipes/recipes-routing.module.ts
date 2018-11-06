// import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes.component';

export const recipesRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]},
    ]},
];

// NgModule({
//   imports: [
//     RouterModule
//   ],
//   exports: [
//
//   ]
// });
// export class RecipesRoutingModule {
//
// }

