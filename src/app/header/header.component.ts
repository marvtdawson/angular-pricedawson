import { Component, OnInit } from '@angular/core';
import {SiteDataProvider} from '../../services/site-data.service.service';
import {AuthService} from '../../services/auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = this.siteData.title;
  year = this.siteData.year;
  siteName = this.siteData.siteName;

  constructor(private siteData: SiteDataProvider, private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  onLogin() {
    // this.authService.login();
    this.route.navigate(['/signin']);
  }

  onLogout() {
    // this.authService.logout();
    this.route.navigate(['/signout']);
  }

}
