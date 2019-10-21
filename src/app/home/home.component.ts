import { Component, OnInit } from '@angular/core';
import {SiteDataProvider} from '../../services/site-data.service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private siteData: SiteDataProvider,
              private router: Router) { }

  siteName = this.siteData.siteName;
  title = this.siteData.title;

  ngOnInit() {
  }

  loadNewReunion() {
    this.router.navigate(['/new-reunion']);
  }

}

