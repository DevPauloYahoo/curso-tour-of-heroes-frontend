import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

const COMPONENTS = [HeroSearchComponent];
const MODULES = [MaterialModule];

@NgModule({
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
  imports: [CommonModule, MODULES],
})
export class SharedModule {}
