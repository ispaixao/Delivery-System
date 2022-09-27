import { CoreModule } from './../core/core.module';
import { HeaderComponent } from './../shared/components/header/header.component';
import { FooterComponent } from './../shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../core/Material/angular-material/angular-material.module';
import { NgxBootstrapModule } from './../core/Material/ngx-bootstrap/ngx-bootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './components/alerts/alerts.component';
const COMPONENTS = [AlertsComponent, FooterComponent, HeaderComponent];
const MODULES = [NgxBootstrapModule, AngularMaterialModule, RouterModule, CoreModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES],
})
export class SharedModule {}
