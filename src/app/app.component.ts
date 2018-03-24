import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private dataStorage: DataStorageService) {}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: 'AIzaSyCKKBpUCZpE2m9Y0A4bl40GnqSFyb1p2nk',
      authDomain: 'pricedawson-98f0f.firebaseapp.com',
    });
  }

  onLogin() {}

  onLogout() {}

}
