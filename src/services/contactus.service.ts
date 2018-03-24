import {ContactusModel} from '../models/contactus.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactusService {

  private contactComments: ContactusModel[] = [];

  constructor(private http: HttpClient) { }

  addNewComment(newContactComments) {
    this.contactComments.push(newContactComments);
    console.log(this.contactComments);
    return this.http.post('http://localhost:4200', newContactComments);
  }

}
