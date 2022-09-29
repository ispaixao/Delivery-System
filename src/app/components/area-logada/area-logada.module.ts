import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './../../core/Material/angular-material/angular-material.module';
import { NgxBootstrapModule } from './../../core/Material/ngx-bootstrap/ngx-bootstrap.module';
import { AreaLogadaComponent } from './area-logada.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroCategoriasComponent } from './cadastros/cadastro-categorias/cadastro-categorias.component';
import { CadastroProdutosComponent } from './cadastros/cadastro-produtos/cadastro-produtos.component';
import { CadastroUsuariosComponent } from './cadastros/cadastro-usuarios/cadastro-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlteracaoCategoriaComponent } from './gerenciamentos/alteracao-categoria/alteracao-categoria.component';
import { AlteracaoProdutosComponent } from './gerenciamentos/alteracao-produtos/alteracao-produtos.component';
import { AlteracaoUsuariosComponent } from './gerenciamentos/alteracao-usuarios/alteracao-usuarios/alteracao-usuarios.component';

@NgModule({
  declarations: [
    AreaLogadaComponent,
    DashboardComponent,
    CadastroCategoriasComponent,
    CadastroProdutosComponent,
    CadastroUsuariosComponent,
    AlteracaoCategoriaComponent,
    AlteracaoProdutosComponent,
    AlteracaoUsuariosComponent
  ],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    AngularMaterialModule,
    RouterModule,
    AreaLogadaRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [AreaLogadaComponent],
})
export class AreaLogadaModule {}
