import { AlteracaoCategoriaComponent } from './cadastros/gerenciamentos/alteracao-categoria/alteracao-categoria/alteracao-categoria.component';
import { CadastroUsuariosComponent } from './cadastros/cadastro-usuarios/cadastro-usuarios.component';
import { CadastroProdutosComponent } from './cadastros/cadastro-produtos/cadastro-produtos.component';
import { CadastroCategoriasComponent } from './cadastros/cadastro-categorias/cadastro-categorias.component';
import { AreaLogadaGuard } from './area-logada.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaLogadaComponent } from './area-logada.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AreaLogadaComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'categorias',
        component: CadastroCategoriasComponent,
      },
      {
        path: 'categorias/:id',
        component: CadastroCategoriasComponent,
      },
      {
        path: 'produtos',
        component: CadastroProdutosComponent,
      },
      {
        path: 'usuarios',
        component: CadastroUsuariosComponent,
      },
      {
        path: 'alterar-categoria',
        component: AlteracaoCategoriaComponent
      }
    ],
    canLoad: [AreaLogadaGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaLogadaRoutingModule {}
