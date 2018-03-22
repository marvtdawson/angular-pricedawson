import { Component, OnInit } from '@angular/core';
import {SiteDataProvider} from '../../services/site-data.service.service';
import {AuthService} from '../../services/auth-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title = this.siteData.title;
  year = this.siteData.year;
  siteName = this.siteData.siteName;

  constructor(private siteData: SiteDataProvider, private authService: AuthService) { }

  ngOnInit() {
  }

}
