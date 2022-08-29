import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../core/Material/angular-material/angular-material.module';
import { NgxBootstrapModule } from './../core/Material/ngx-bootstrap/ngx-bootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './components/alerts/alerts.component';

const COMPONENTS = [AlertsComponent];
const MODULES = [NgxBootstrapModule, AngularMaterialModule, RouterModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES],
})
export class SharedModule {}
