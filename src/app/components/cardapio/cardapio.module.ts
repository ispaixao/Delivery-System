import { CardCategoriaComponent } from './../card-categoria/card-categoria.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './../../core/Material/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio.component';
import { CardapioRoutingModule } from './cardapio-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { CardProdutoComponent } from '../card-produto/card-produto.component';
import { CategoriasComponent } from './categorias/categorias.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardapioComponent,
    CardCategoriaComponent,
    CategoriasComponent,
    CardProdutoComponent,
    ProdutosComponent,
  ],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CardapioModule {}
