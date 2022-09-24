import { Component } from '@angular/core';

import { Hero } from './model/hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes: Hero[];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
