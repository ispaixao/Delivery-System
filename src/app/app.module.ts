import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaLogadaModule } from './components/area-logada/area-logada.module';
import { CardapioModule } from './components/cardapio/cardapio.module';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from './components/home/home.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { LoginModule } from './components/login/login.module';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { CoreModule } from './core/core.module';
import { AngularMaterialModule } from './core/Material/angular-material/angular-material.module';
import { NgxBootstrapModule } from './core/Material/ngx-bootstrap/ngx-bootstrap.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalizacaoComponent,
    ContatoComponent,
    SobreNosComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    FlexLayoutModule,
    CardapioModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    AreaLogadaModule,
    NgxBootstrapModule
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
