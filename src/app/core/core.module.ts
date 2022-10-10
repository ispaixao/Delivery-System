import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './Material/angular-material/angular-material.module';
import { NgxBootstrapModule } from './Material/ngx-bootstrap/ngx-bootstrap.module';

const COMPONENTS = [];

const MODULES = [
  CommonModule,
  AngularMaterialModule,
  RouterModule,
  FlexLayoutModule,
  NgxBootstrapModule,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  /* COMPONENTS FOI EXPORTADO PARA UTILIZAÇÃO EM OUTROS MODULOS*/
  exports: [MODULES, COMPONENTS],
})
export class CoreModule {}
