import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../services/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PastReunionsComponent } from './past-reunions/past-reunions.component';
import { CommitteesCityComponent } from './committees/committeescity/committeescity.component';
import { MemberzComponent } from './memberz/memberz.component';
import { NewReunionComponent } from './new-reunion/new-reunion.component';
import { FamilyProfilesComponent } from './family-profiles/family-profiles.component';
import { FamilyMembersComponent } from './family-profiles/family-members/family-members.component';
import { CommitteesComponent } from './committees/committees.component';
import { UserComponent } from './memberz/user/user.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { MindYourBusinessComponent } from './mind-your-business/mind-your-business.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'memberz', canActivate: [AuthGuard], component: MemberzComponent, children: [
      {path: ':id/:name', component: UserComponent}
    ]},
  {path: 'new-reunion', component: NewReunionComponent},
  {path: 'past-reunions', component: PastReunionsComponent},
  {path: 'general-info', component: GeneralInfoComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'committees', canActivate: [AuthGuard], component: CommitteesComponent, children: [
      {path: ':id/city', component: CommitteesCityComponent}
    ]},
  {path: 'mind-your-business', component: MindYourBusinessComponent},
  {path: 'family-profiles', canActivateChild: [AuthGuard], component: FamilyProfilesComponent, children: [
      { path: ':id/', component: FamilyMembersComponent }
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
