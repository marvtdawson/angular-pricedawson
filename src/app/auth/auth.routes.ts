import { Routes } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignoutComponent} from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';

export const AUTH_ROUTES: Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signout', component: SignoutComponent}
];
