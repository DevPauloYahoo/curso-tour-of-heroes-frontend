import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { MessageComponent } from './components/message/message.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const COMPONENTS = [ToolbarComponent, MessageComponent];
const MODULES = [CommonModule, MaterialModule, FlexLayoutModule, RouterModule, HttpClientModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [MODULES, COMPONENTS],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule');
    }
  }
}
