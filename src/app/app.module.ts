import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';;
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FIREBASE_CONFIG } from '../config/app-firebase.config';
import { AngularMaterialModule } from './angular-material.module';

import { ContactusService } from '../services/contactus.service';
import { DataStorageService } from '../services/data-storage.service';
import { SiteDataProvider } from '../services/site-data.service.service';
import { AuthGuard } from '../services/auth-guard.service';
import { AuthService } from '../services/auth-service';
import { FirebaseAuth } from './auth/firebase.auth';

import { AppComponent } from './app.component';
import { FamilyMemberzModule } from './family-memberz/family-memberz.module';
import { ReunionsModule } from './reunions/reunions.module';
import { AuthFormsModule } from './auth/auth-forms.module'; // login, sign up, sign out

import { GeneralInfoComponent } from './general-info/general-info.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserComponent } from './family-memberz/user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from '../shared/dropdown.directive';
import { FamilyMembersComponent } from './family-memberz/family-profiles/family-members/family-members.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralInfoComponent,
    HomeComponent,
    ContactUsComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    DropdownDirective,
    FamilyMembersComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FamilyMemberzModule,
    ReunionsModule,
    AuthFormsModule,
    ServiceWorkerModule.register('./ngsw-work.js', {enabled: environment.production}),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    NgbModule.forRoot(),
    AngularMaterialModule
  ],
  providers: [
    SiteDataProvider,
    ContactusService,
    DataStorageService,
    AuthGuard,
    AuthService,
    FirebaseAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
