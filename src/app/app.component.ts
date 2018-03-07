import { Component } from '@angular/core';
import {SiteDataProvider} from './site-data.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private siteData: SiteDataProvider) {}

    title = this.siteData.title;
    year = this.siteData.year;
    siteName = this.siteData.siteName;
}
