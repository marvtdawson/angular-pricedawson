import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactusService } from './contactus.service';


@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
              private contactusService: ContactusService) {}

  storeContactusComments(memberData) {
    this.http.put('https://pricedawson-98f0f.firebaseio.com/contactus.json', memberData);
    // this.http.put('https://pricedawson-98f0f.firebaseio.com/contactus.json', this.contactusService.addNewComment());
  }

}
