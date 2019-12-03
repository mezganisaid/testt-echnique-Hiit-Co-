import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message: String;
  constructor() { 
    this.message = 'Test technique : MEZGANI SAID';
  }

  ngOnInit() {
  }

}
