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
import { FamilyMemberzModule } from './family-memberz/family-memberz.module';
import { ReunionsModule } from './reunions/reunions.module';

import { GeneralInfoComponent } from './general-info/general-info.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserComponent } from './family-memberz/user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { SigninComponent } from './auth/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralInfoComponent,
    HomeComponent,
    ContactUsComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
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
    FamilyMemberzModule,
    ReunionsModule,
    ServiceWorkerModule.register('./ngsw.json', {})
  ],
  providers: [SiteDataProvider, ContactusService, DataStorageService, AuthGuard, AuthService, FirebaseAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
