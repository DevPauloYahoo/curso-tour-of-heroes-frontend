import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  hero$!: Observable<Hero>;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero$ = this.heroService.getHero(id);
  }

  goBack(): void {
    this.location.back();
  }
}
