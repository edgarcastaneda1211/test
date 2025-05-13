// services/heroes.service.ts
import { Injectable } from '@angular/core';
import { Heroe } from '../class/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroes: Heroe[] = [
    new Heroe('Batman', 'Dark Knight', 'assets/img/batman.jpg', '2021', 'DC'),
    new Heroe('Spiderman', 'Shoots webs', 'assets/img/spiderman.jpg', '2020', 'Marvel')
  ];

  constructor() { }

  // Function to get all heroes
  getHeroes(): Heroe[] {
    return this.heroes;
  }

  // Function to get hero by index
  getHeroById(id: number): Heroe {
    return this.heroes[id];
  }
}