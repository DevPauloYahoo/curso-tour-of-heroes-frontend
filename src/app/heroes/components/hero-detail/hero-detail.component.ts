import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  // hero$!: Observable<Hero>;
  hero!: Hero;
  isEditing!: boolean;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    this.getHero();
  }

  getHero(): void {
    const paramId = this.route.snapshot.params['id'];
    this.hero = { name: '' } as Hero;
    if (paramId === 'new') {
      this.isEditing = false;
    } else {
      this.isEditing = true;
      const id = Number(paramId);
      this.heroService.getById(id).subscribe((hero) => (this.hero = hero));
    }
    // this.hero$ = this.heroService.getHero(id);
  }

  goBack(): void {
    this.location.back();
  }

  // create(): void {
  //   this.heroService.create(this.hero).subscribe(() => this.goBack());
  // }
  //
  // update(): void {
  //   this.heroService.update(this.hero).subscribe(() => this.goBack());
  // }

  save(): void {
    if (!this.isEditing) {
      this.heroService.create(this.hero).subscribe(() => this.goBack());
    } else {
      this.heroService.update(this.hero).subscribe(() => this.goBack());
    }
  }
}
