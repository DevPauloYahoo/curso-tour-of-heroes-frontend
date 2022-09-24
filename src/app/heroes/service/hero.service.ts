import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from '../../message/service/message.service';
import { Hero } from '../model/hero';
import { HEROES } from '../model/mock-hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched heroes');
    return of(HEROES);
  }
}
