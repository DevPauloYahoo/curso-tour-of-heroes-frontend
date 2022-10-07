import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

import { Hero } from '../heroes/models/hero';
import { HeroService } from '../heroes/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // heroes: Hero[] = [];
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService, private route: Router) {
    this.heroes$ = this.heroService.getAll().pipe(map((heroes) => heroes.slice(1, 5)));
    // this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes.slice(1, 4)));
    // this.getHeroes();
  }

  // getHeroes() {
  //   this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes.slice(1, 4)));
  // }
  onSelected(hero: Hero): void {
    this.route.navigate(['/heroes', hero.id]);
  }
}
