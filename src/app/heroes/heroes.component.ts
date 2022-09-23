import { Component } from '@angular/core';

import { Hero } from './model/hero';
import { HEROES } from './model/mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;
  hero: Hero = {
    id: 1,
    name: 'Wolverine',
  };

  constructor() {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
