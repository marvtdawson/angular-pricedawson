import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../services/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { ReunionsComponent } from './reunions/reunions.component';
import { PastReunionsComponent } from './reunions/past-reunions/past-reunions.component';
import { NewReunionComponent } from './reunions/new-reunion/new-reunion.component';

import { FamilyCommitteeCitiesComponent } from './family-memberz/family-committee-cities/family-committee-cities.component';
import { FamilyCommitteesComponent } from './family-memberz/family-committees/family-committees.component';

import { FamilyMemberzComponent } from './family-memberz/family-memberz.component';
import { FamilyProfilesComponent } from './family-memberz/family-profiles/family-profiles.component';
import { UserComponent } from './family-memberz/user/user.component';

import { GeneralInfoComponent } from './general-info/general-info.component';
import { FamilyBusinessesComponent } from './family-memberz/family-businesses/family-businesses.component';

import { SignupComponent } from './auth/signup/signup.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, },
  {path: 'family-memberz', canActivate: [AuthGuard], component: FamilyMemberzComponent,
    children: [
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: 'reunions', component: ReunionsComponent, children: [
    {path: 'new-reunion', component: NewReunionComponent},
    {path: 'past-reunions', component: PastReunionsComponent}
    ]},
  {path: 'general-info', component: GeneralInfoComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'family-committees', canActivate: [AuthGuard], component: FamilyCommitteesComponent, children: [
      {path: ':id/city', component: FamilyCommitteeCitiesComponent}
    ]},
  {path: 'family-businesses', component: FamilyBusinessesComponent},
  {path: 'family-profiles', canActivateChild: [AuthGuard], component: FamilyProfilesComponent, children: [
      { path: ':id/', component: FamilyMemberzComponent }
    ]},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signout', component: SignoutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
