import { Component, OnInit } from '@angular/core';
import {SiteDataProvider} from '../../services/site-data.service.service';
import {AuthService} from '../../services/auth-service';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = this.siteData.title;
 // user$: any[] = [];
  user: firebase.User;

  constructor(private siteData: SiteDataProvider,
              private authService: AuthService,
              private route: Router,
              private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => this.user = (user));
  }

  ngOnInit() {
  }

  goToHomePage() {
    this.route.navigate(['/home']);
  }

  onLogout() {
    this.authService.signout();
  }

}
