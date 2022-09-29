import { CoreModule } from './../core/core.module';
import { HeaderComponent } from './../shared/components/header/header.component';
import { FooterComponent } from './../shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../core/Material/angular-material/angular-material.module';
import { NgxBootstrapModule } from './../core/Material/ngx-bootstrap/ngx-bootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './components/alerts/alerts.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from '../core/interceptors/loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
const COMPONENTS = [AlertsComponent, FooterComponent, HeaderComponent, LoadingComponent];
const MODULES = [NgxBootstrapModule, AngularMaterialModule, RouterModule, CoreModule];

@NgModule({
  declarations: [COMPONENTS, LoadingComponent],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
