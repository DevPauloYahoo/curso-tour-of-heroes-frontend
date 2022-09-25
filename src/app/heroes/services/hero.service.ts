import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from '../../core/services/message.service';
import { HEROES } from '../../core/services/mock-hero';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched heroes');
    return of(HEROES);
  }

  getHero(_id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === _id)!;
    const { id, name } = hero;
    this.messageService.add(`HeroService: Fetched hero ID: ${id} and Name: ${name}`);
    return of(hero);
  }
}
