import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { RouterModule } from '@angular/router';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './Material/angular-material/angular-material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogComponent } from './components/dialog/dialog.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  DialogComponent,
  LoadingComponent,
];

const MODULES = [AngularMaterialModule, RouterModule, FlexLayoutModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  /* COMPONENTS FOI EXPORTADO PARA UTILIZAÇÃO EM OUTROS MODULOS*/
  exports: [MODULES, COMPONENTS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
