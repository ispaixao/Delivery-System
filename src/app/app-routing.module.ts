import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { LoginGuard } from './components/login/login.guard';
import { AreaLogadaGuard } from './components/area-logada/area-logada.guard';
import { ContatoComponent } from './components/contato/contato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {title: 'Burguer Foods'},
    pathMatch: 'full',
  },

  {
    path: 'cardapio',
    loadChildren: () =>
      import('./components/cardapio/cardapio.module').then(
        (m) => m.CardapioModule
      ),
  },
  {
    path: 'localizacao',
    component: LocalizacaoComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: 'sobre-nos',
    component: SobreNosComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
    canLoad: [LoginGuard],
  },
  {
    path: 'restrito',
    loadChildren: () =>
      import('./components/area-logada/area-logada.module').then(
        (m) => m.AreaLogadaModule
      ),
    canLoad: [AreaLogadaGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
