import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FirebaseAuth } from '../firebase.auth';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private firebaseAuth: FirebaseAuth,
              private snackBar: MatSnackBar,
              private authService: AuthService) { }

  ngOnInit() {}

  // sign up with Google credentials
  onSignUpWithGoogle() {
    this.snackBar.open('Authenticating With Google', 'Welcome!', {
      duration: 2000
    });
    this.authService.signUpWithGoogle();
  }

  // sign up with Facebook credentials
  onSignUpWithFacebook() {
    this.snackBar.open('Authenticating With Facebook', 'Welcome!', {
      duration: 2000
    });
    this.authService.loginWithFacebook();
  }

  // sign up with user email and password credentials
  onSignUpWithEmailAndPassword(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log(email + ' ' + password);
    this.authService.signUpWithEmailAndPassword(email, password);
    this.snackBar.open('Authenticating', 'Welcome!', {
      duration: 2000
    });
  }

}
