import { NgxBootstrapModule } from './Material/ngx-bootstrap/ngx-bootstrap.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './Material/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

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
