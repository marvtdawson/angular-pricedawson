import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { FirebaseAuth } from '../firebase.auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;


  constructor(private firebaseAuth: FirebaseAuth) { }

  ngOnInit() {
    this.signUpForm =  new FormGroup({

      memberData: new FormGroup({
        'email':  new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required)
      })
    });
  }

 onSignUp() {
      /*const email = form.value.email;
      const password = form.value.password;
      this.firebaseAuth.signupUser(email, password);*/
  }

}
