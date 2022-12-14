import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule,
  MatTooltipModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
  MatAutocompleteModule,
];

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES],
})
export class MaterialModule {}
