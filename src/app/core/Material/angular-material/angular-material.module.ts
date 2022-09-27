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
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDateFnsModule} from '@angular/material-date-fns-adapter';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';





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
  MatInputModule,
  MatRadioModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatDateFnsModule,
  MatNativeDateModule,
  MatSelectModule

];

@NgModule({
  declarations: [],
  imports: [CommonModule, MODULES],
  exports: [MODULES],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
})
export class AngularMaterialModule {}
