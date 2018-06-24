import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info',
  template: `
  <p>
    general-info works!  Or did it really
  </p>
  `,
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
