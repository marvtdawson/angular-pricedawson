import { Injectable } from '@angular/core';

@Injectable()
export class SiteDataProvider {

  siteName = 'Price-Dawson';
  date = new Date();
  year = this.date.getFullYear();

  title = 'PRICE-DAWSON FAMILY REUNION ' + this.year;

  constructor() {}

}
