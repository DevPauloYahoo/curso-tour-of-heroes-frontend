import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';

import { Hero } from '../../../heroes/models/hero';
import { HeroService } from '../../../heroes/services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent {
  @Input() label: string = '';
  heroes$!: Observable<Hero[]>;
  @Output() private selected = new EventEmitter<Hero>();
  private searchTerm = new Subject<string>();

  constructor(private heroService: HeroService) {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap((term) => heroService.search(term)),
    );
  }

  search(nameParam: string): void {
    this.searchTerm.next(nameParam);
  }

  onSelected(selectedItem: MatAutocompleteSelectedEvent): void {
    const hero: Hero = selectedItem.option.value;
    this.searchTerm.next('');
    this.selected.emit(hero);
  }
}
