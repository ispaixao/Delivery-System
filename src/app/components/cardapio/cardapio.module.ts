import { ProdutosComponent } from './produtos/produtos.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './../../core/Material/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio.component';
import { CardapioRoutingModule } from './cardapio-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardapioComponent,
    CategoriasComponent,
    ProdutosComponent
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
