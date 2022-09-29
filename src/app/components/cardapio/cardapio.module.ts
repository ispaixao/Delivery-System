import { NgxBootstrapModule } from './../../core/Material/ngx-bootstrap/ngx-bootstrap.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './../../core/Material/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio.component';
import { CardapioRoutingModule } from './cardapio-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FinalizarComponent } from './carrinho/finalizar/finalizar.component';
import { FinalizarPedidoComponent } from './carrinho/finalizar/finalizar-pedido/finalizar-pedido/finalizar-pedido.component';

@NgModule({
  declarations: [
    CardapioComponent,
    CategoriasComponent,
    ProdutosComponent,
    FinalizarComponent,
    FinalizarPedidoComponent,
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
  ],
})
export class CardapioModule {}
