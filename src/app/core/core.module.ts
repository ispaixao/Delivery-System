import { CardapioModule } from './../components/cardapio/cardapio.module';
import { SharedModule } from './../shared/shared.module';
import { NgxBootstrapModule } from './Material/ngx-bootstrap/ngx-bootstrap.module';
import { RouterModule } from '@angular/router';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './Material/angular-material/angular-material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const COMPONENTS = [FooterComponent, HeaderComponent];

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
