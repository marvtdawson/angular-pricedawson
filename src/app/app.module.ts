import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { ContactusService } from '../services/contactus.service';
import { DataStorageService } from '../services/data-storage.service';
import { SiteDataProvider} from '../services/site-data.service.service';
import { AuthGuard } from '../services/auth-guard.service';
import { AuthService } from '../services/auth-service';
import { FirebaseAuth } from './auth/firebase.auth';

import { AppComponent } from './app.component';
import { PastReunionsComponent } from './past-reunions/past-reunions.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { NewReunionComponent } from './new-reunion/new-reunion.component';
import { HomeComponent } from './home/home.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { CommitteesComponent } from './committees/committees.component';
import { MindYourBusinessComponent } from './mind-your-business/mind-your-business.component';
import { MemberzComponent } from './memberz/memberz.component';
import { UserComponent } from './memberz/user/user.component';
import { CommitteesCityComponent } from './committees/committeescity/committeescity.component';
import { FamilyProfilesComponent } from './family-profiles/family-profiles.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FamilyMembersComponent } from './family-profiles/family-members/family-members.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { SigninComponent } from './auth/signin/signin.component';


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
    CommitteesCityComponent,
    FamilyProfilesComponent,
    HeaderComponent,
    FooterComponent,
    FamilyMembersComponent,
    SignupComponent,
    SigninComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('./ngsw.json', {})
  ],
  providers: [SiteDataProvider, ContactusService, DataStorageService, AuthGuard, AuthService, FirebaseAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
