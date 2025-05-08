import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  showHeroes = true;
  showWelcomeMessage = true;

  toggleHeroes() {
    this.showHeroes = !this.showHeroes;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
