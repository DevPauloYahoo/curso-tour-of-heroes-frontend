import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes$: Observable<Hero[]>;
  // heroes?: Hero[];
  displayedColumns: string[] = ['id', 'name'];

  constructor(private heroService: HeroService) {
    this.heroes$ = heroService.getHeroes().pipe(
      catchError(() => {
        console.log('Erro ao buscar heroes');
        return of([]);
      }),
    );
    // heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
