import { AreaLogadaModule } from './components/area-logada/area-logada.module';
import { LoginModule } from './components/login/login.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardapioModule } from './components/cardapio/cardapio.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
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
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CommonModule } from '@angular/common';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { NgxBootstrapModule } from './core/Material/ngx-bootstrap/ngx-bootstrap.module';
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
