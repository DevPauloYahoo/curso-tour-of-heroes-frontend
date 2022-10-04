import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ConfirmationDialogComponent } from '../../../core/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { DialogModel } from '../../../core/models/dialog-model';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes$: Observable<Hero[]>;
  // heroes: Hero[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private heroService: HeroService, private dialog: MatDialog) {
    this.heroes$ = heroService.getAll().pipe(
      catchError(() => {
        console.log('Erro ao buscar heroes');
        return of([]);
      }),
    );
    // heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  delete(hero: Hero): void {
    const data: DialogModel = {
      cancelText: 'Cancel',
      confirmText: 'Confirm',
      content: `Delete '${hero.name}'?`,
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data,
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService.delete(hero).subscribe(() => {
          this.heroes$.subscribe((heroes) => {
            this.heroes$ = of(heroes);
          });
        });
      }
    });
  }
}
