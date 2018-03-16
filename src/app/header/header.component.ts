import { Component, OnInit } from '@angular/core';
import {SiteDataProvider} from '../site-data.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = this.siteData.title;
  year = this.siteData.year;
  siteName = this.siteData.siteName;

  constructor(private siteData: SiteDataProvider) { }

  ngOnInit() {
  }

}
