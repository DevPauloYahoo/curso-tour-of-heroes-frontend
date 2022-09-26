import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { MessageService } from '../../core/services/message.service';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private messageService: MessageService) {}

  // GET heroes
  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(`${this.baseUrl}/heroes`)
      .pipe(tap((heroes) => this.log(`HeroService: Fetched ${heroes.length} heroes`)));
    // return of(HEROES);
  }

  // GET heroes/id
  getHero(_id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.baseUrl}/heroes/${_id}`)
      .pipe(
        tap((hero) => this.log(`HeroService: Fetched hero ID: ${hero.id} and Name: ${hero.name}`)),
      );
    // const hero = HEROES.find((hero) => hero.id === _id)!;
    // const { id, name } = hero;
    // this.log(`HeroService: Fetched hero ID: ${id} and Name: ${name}`);
    // return of(hero);
  }

  private log(message: string): void {
    this.messageService.add(message);
  }
}
