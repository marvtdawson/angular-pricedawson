import {reject} from 'q';
import {Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router} from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  loggedIn = false;
  user$: Observable<firebase.User>;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private afAuth: AngularFireAuth,
              private afDatabase: AngularFireDatabase) {}

  isAuthenticated() {
    const promise = new Promise (
      (resolve, reject) => {
          setTimeout(() => {
            resolve(this.loggedIn);
          }, 800);
      }
    );
    return promise;
  }

  // authenticate with Google
  signUpWithGoogle() {
   this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  // authenticate with Facebook
  loginWithFacebook() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  // authenticate with user's email and password
  signUpWithEmailAndPassword(email, password) {
    // sign in with email and password using firebase
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch(error => console.log('REGISTER-ERROR', error));
  }

  // sign user out
  signout() {
    this.loggedIn = false;
    this.afAuth.auth.signOut();
  }
}
