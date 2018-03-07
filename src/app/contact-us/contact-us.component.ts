import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  genders = ['male', 'female'];
  contactusForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactusForm =  new FormGroup({
      'uname': new FormControl(null),
      'email': new FormControl(null),
      'state': new FormControl(null),
      'city': new FormControl(null),
      'gender': new FormControl('male')

    });
  }

}
