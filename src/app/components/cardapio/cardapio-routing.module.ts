import { CardapioComponent } from './cardapio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FinalizarComponent } from './carrinho/finalizar/finalizar.component';
import { FinalizarPedidoComponent } from './carrinho/finalizar/finalizar-pedido/finalizar-pedido/finalizar-pedido.component';

const routes: Routes = [
  {
    path: '',
    component: CardapioComponent,
  },
  {
    path: 'produto',
    component: ProdutosComponent,
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent,
  },
  {
    path: 'finalizar-pedido',
    component: FinalizarComponent,
  },
  {
    path: 'finalizado',
    component: FinalizarPedidoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardapioRoutingModule {}
