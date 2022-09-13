import { AngularMaterialModule } from './../../core/Material/angular-material/angular-material.module';
import { CoreModule } from './../../core/core.module';
import { AreaLogadaComponent } from './../area-logada/area-logada.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AngularMaterialModule,
  ],
  declarations: [LoginComponent, AreaLogadaComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
