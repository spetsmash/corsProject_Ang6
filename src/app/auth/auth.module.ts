import {NgModule} from '@angular/core';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {authRoutes} from './authRoutes';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class  AuthModule {}
