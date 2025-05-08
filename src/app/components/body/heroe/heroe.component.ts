import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../../class/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html', // Fixed path
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  // Properties established
  heroes: Heroe[] = [ // create an array called heroes of obj type Heroe, which each element is a full object
    new Heroe('Batman', 'Dark Knight', 'assets/img/batman.jpg', '2021', 'DC'),
    new Heroe('Spiderman', 'Shoots webs', 'assets/img/spiderman.jpg', '2020', 'Marvel')
  ]; 


  constructor() { } 

  ngOnInit(): void { // lifecycle
  }
}
