import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Hero } from './model/hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes$: Observable<Hero[]>;
  // heroes?: Hero[];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {
    this.heroes$ = heroService.getHeroes().pipe(
      catchError(() => {
        console.log('Erro ao buscar heroes');
        return of([]);
      }),
    );
    // heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
