import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PastReunionsComponent } from './past-reunions/past-reunions.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { NewReunionComponent } from './new-reunion/new-reunion.component';
import { HomeComponent } from './home/home.component';

import { SiteDataProvider} from './site-data.service.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommitteesComponent } from './committees/committees.component';
import { MindYourBusinessComponent } from './mind-your-business/mind-your-business.component';
import { MemberzComponent } from './memberz/memberz.component';
import { UserComponent } from './memberz/user/user.component';
import { CommitteesCityComponent } from './committees/committeescity/committeescity.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'memberz', component: MemberzComponent},
  {path: 'memberz/:id/:name', component: UserComponent},
  {path: 'new-reunion', component: NewReunionComponent},
  {path: 'past-reunions', component: PastReunionsComponent},
  {path: 'general-info', component: GeneralInfoComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'committees', component: CommitteesComponent},
  {path: 'committees/:id/city', component: CommitteesCityComponent},
  {path: 'mind-your-business', component: MindYourBusinessComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PastReunionsComponent,
    GeneralInfoComponent,
    NewReunionComponent,
    HomeComponent,
    ContactUsComponent,
    CommitteesComponent,
    MindYourBusinessComponent,
    MemberzComponent,
    UserComponent,
    CommitteesCityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [SiteDataProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
