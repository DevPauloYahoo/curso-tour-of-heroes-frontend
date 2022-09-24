import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../model/hero';
import { HEROES } from '../model/mock-hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
