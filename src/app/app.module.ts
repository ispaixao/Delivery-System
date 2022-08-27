import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardapioModule } from './components/cardapio/cardapio.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './core/Material/angular-material/angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent, HomeComponent, CarrinhoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    FlexLayoutModule,
    CardapioModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
