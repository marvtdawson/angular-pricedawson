import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseAuth } from '../firebase.auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private firebaseAuth: FirebaseAuth) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
      const email = form.value.email;
      const password = form.value.password;
      this.firebaseAuth.signupUser(email, password);
  }

}
