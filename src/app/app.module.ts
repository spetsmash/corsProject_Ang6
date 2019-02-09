import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import {routes} from './router';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {shoppingListReducer} from './shopping-list/store/shopping-list.reducers';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    ShoppingListModule,
    AuthModule,
    BrowserModule.withServerTransition({appId: 'cors-project1'}),
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    HttpClientModule,
    CoreModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer})
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
