import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memberz',
  templateUrl: './memberz.component.html',
  styleUrls: ['./memberz.component.css']
})
export class MemberzComponent {

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
