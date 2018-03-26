import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactusModel } from '../../models/contactus.model';
import { ContactusService } from '../../services/contactus.service';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  newComments: ContactusModel[] = [
    new ContactusModel('uname', 'email', 'state', 'city', 'comment')
  ];
  genders = ['male', 'female'];
  contactusForm: FormGroup;

  constructor(private contactusService: ContactusService,
              private dataStorageService: DataStorageService) { }
  ngOnInit() {

    this.contactusForm =  new FormGroup({

      memberData: new FormGroup({
          'uname': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'state': new FormControl(null, Validators.required),
           'city': new FormControl(null, Validators.required),
        'comment': new FormControl(null, Validators.required)
      })
    });
    console.log('memberData');
  }

  onSubmit() {

    console.log(this.contactusForm);
    // this.dataStorageService.storeContactusComments(memberData);
  }

}
