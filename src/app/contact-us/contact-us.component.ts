import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

      memberData: new FormGroup({
        'uname': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'state': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required)
      }),
      'gender': new FormControl('male')
    });
  }

  onSubmit(){
    console.log(this.contactusForm);
  }

}
