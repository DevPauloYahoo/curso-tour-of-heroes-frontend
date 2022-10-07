import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  paramId: string = '';
  isEditing = false;

  // CREATE REACTIVE FORM
  formDetail = this.formBuilder.group({
    id: [{ value: '', disabled: true }],
    name: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
  ) {
    this.getHero();
  }

  get name() {
    return this.formDetail.controls['name'];
  }

  getHero(): void {
    this.paramId = this.route.snapshot.params['id'];
    if (this.paramId !== 'new') {
      this.isEditing = true;
      this.heroService.getById(+this.paramId).subscribe(({ id, name }) => {
        this.formDetail.patchValue({
          name,
          id: id.toString(),
        });
      });
      // const id = parseInt(paramId);
      // this.heroService.getById(id).subscribe((hero) => {
      // MANEIRA 1
      // this.hero = hero;
      // this.formDetail.patchValue({
      //   hero.name,
      //   id: hero.id.toString(),
      // });
      // MANEIRA 2
      // this.formDetail.setValue({
      //   id: String(hero.id),
      //   name: hero.name,
      // });
      // MANEIRA 3
      // this.formDetail.controls.id.setValue(String(hero.id));
      // this.formDetail.controls.name.setValue(String(hero.name));
      // });
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
    const { value } = this.formDetail;
    if (this.formDetail.valid) {
      if (!this.isEditing) {
        // const hero: Hero = {
        // name: value.name!,
        // } as Hero;
        //
        this.heroService.create(this.setHero(value.name!)).subscribe(() => this.goBack());
      } else {
        // const hero: Hero = {
        // id: this.hero.id,
        // name: value.name!,
        //};
        //
        this.heroService
          .update(this.setHero(value.name!, +this.paramId))
          .subscribe(() => this.goBack());
      }
    }
  }

  private setHero(name: string, _id?: number): Hero {
    return {
      id: _id!,
      name,
    };
  }
}
