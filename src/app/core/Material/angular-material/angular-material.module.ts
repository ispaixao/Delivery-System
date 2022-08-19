import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';


import { MatCheckboxModule } from '@angular/material/checkbox';

const MODULES = [
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatListModule,
  MatTooltipModule,
  MatMenuModule,
  MatExpansionModule,
  MatDialogModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatTableModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MODULES],
  exports: [MODULES],
})
export class AngularMaterialModule {}
