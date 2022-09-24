import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Hero } from '../heroes/model/hero';
import { HeroService } from '../heroes/service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // heroes: Hero[] = [];
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService) {
    this.heroes$ = this.heroService.getHeroes().pipe(map((heroes) => heroes.slice(1, 5)));
    // this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes.slice(1, 4)));
    // this.getHeroes();
  }

  // getHeroes() {
  //   this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes.slice(1, 4)));
  // }
}
