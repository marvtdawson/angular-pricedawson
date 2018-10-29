import {NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {SigninComponent} from './signin/signin.component';
import {SignoutComponent} from './signout/signout.component';
import {SignupComponent} from './signup/signup.component';

import { AngularMaterialModule } from '../angular-material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SigninComponent,
    SignoutComponent,
    SignupComponent
  ],
  imports: [AngularMaterialModule,
  BrowserAnimationsModule,
  FormsModule],
  providers: []
})


export class AuthFormsModule {}
