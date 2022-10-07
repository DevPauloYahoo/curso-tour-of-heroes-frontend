import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

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
  getAll(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(`${this.baseUrl}/heroes`)
      .pipe(tap((heroes) => this.log(`HeroService: Fetched ${heroes.length} heroes`)));
    // return of(HEROES);
  }

  // GET heroes/id
  getById(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(this.getUrl(id))
      .pipe(
        tap((hero) => this.log(`HeroService: Fetched hero ID: ${hero.id} and Name: ${hero.name}`)),
      );
    // const hero = HEROES.find((hero) => hero.id === _id)!;
    // const { id, name } = hero;
    // this.log(`HeroService: Fetched hero ID: ${id} and Name: ${name}`);
    // return of(hero);
  }

  // GET /heroes?name=nameParam
  search(nameParam: string): Observable<Hero[]> {
    if (!nameParam.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?name=${nameParam}`).pipe(
      tap((heroes) => {
        heroes.length
          ? this.log(`HeroService: found ${heroes.length} hero(es) matching ${nameParam}`)
          : this.log(`HeroService: no heroes matching ${nameParam}`);
      }),
    );
  }

  // POST heroes
  create(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(`${this.baseUrl}/heroes`, hero)
      .pipe(
        tap((hero) => this.log(`HeroService: Create hero ID: ${hero.id} and Name: ${hero.name}`)),
      );
  }

  // PUT heroes/id
  update(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(this.getUrl(hero.id), hero)
      .pipe(
        tap((hero) => this.log(`HeroService: Updated hero ID: ${hero.id} and Name: ${hero.name}`)),
      );
  }

  // DELETE heroes/id
  delete(hero: Hero): Observable<any> {
    return this.http
      .delete<any>(this.getUrl(hero.id))
      .pipe(tap(() => this.log(`HeroService: deleted hero ID: ${hero.id} and Name: ${hero.name}`)));
  }

  // Private methods
  private log(message: string): void {
    this.messageService.add(message);
  }

  private getUrl(id: number): string {
    return `${this.baseUrl}/heroes/${id}`;
  }
}
