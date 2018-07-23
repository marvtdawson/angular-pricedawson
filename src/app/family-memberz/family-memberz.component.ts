import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-memberz',
  templateUrl: './family-memberz.component.html',
  styleUrls: ['./family-memberz.component.css']
})
export class FamilyMemberzComponent {

   user = [
    {
      id: '1',
      name: 'Marvin'
    },
    {
      id: '2',
      name: 'Tosha'
    },
    {
      id: '3',
      name: 'Javea'
    }
  ];

}
