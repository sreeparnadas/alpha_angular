import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpLevelRoutingModule } from './mp-level-routing.module';
import { MpLevelComponent } from './mp-level.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    MpLevelComponent
  ],
  imports: [
    CommonModule,
    MpLevelRoutingModule,
    FormsModule,
    MatFormFieldModule,
    
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule ,
    MatCardModule,
    // FormGroupModule,
  ]
})
export class MpLevelModule { }
