import { CardapioComponent } from './components/cardapio/cardapio.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FinalizarComponent } from './components/carrinho/finalizar/finalizar.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';;

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
    path: 'carrinho',
    component: CarrinhoComponent,
  },
  {
    path: 'finalizar',
    component: FinalizarComponent,
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
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'restrito',
    loadChildren: () =>
      import('./components/area-logada/area-logada.module').then((m) => m.AreaLogadaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
