import {NgModule} from '@angular/core';

import {SigninComponent} from './signin/signin.component';
import {SignoutComponent} from './signout/signout.component';
import {SignupComponent} from './signup/signup.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignoutComponent,
    SignupComponent
  ],
  imports: [],
  providers: []
})


export class AuthFormsModule {}
