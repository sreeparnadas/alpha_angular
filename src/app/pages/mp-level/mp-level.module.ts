import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpLevelRoutingModule } from './mp-level-routing.module';
import { MpLevelComponent } from './mp-level.component';


@NgModule({
  declarations: [
    MpLevelComponent
  ],
  imports: [
    CommonModule,
    MpLevelRoutingModule
  ]
})
export class MpLevelModule { }
