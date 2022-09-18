import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../../core/Material/angular-material/angular-material.module';
import { NgxBootstrapModule } from './../../core/Material/ngx-bootstrap/ngx-bootstrap.module';
import { AreaLogadaComponent } from './area-logada.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaLogadaRoutingModule } from './area-logada-routing.module';



@NgModule({
  declarations: [AreaLogadaComponent],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    AngularMaterialModule,
    RouterModule,
    AreaLogadaRoutingModule
  ],
  exports: [AreaLogadaComponent]
})
export class AreaLogadaModule { }
