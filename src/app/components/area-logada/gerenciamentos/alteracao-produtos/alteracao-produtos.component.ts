import {
  AlertService,
  AlertTypes,
} from './../../../../shared/services/alert/alert.service';
import { Produto, Produtos } from './../../../../shared/model/Produto';
import { ProdutosService } from './../../../../core/services/produto/produtos.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alteracao-produtos',
  templateUrl: './alteracao-produtos.component.html',
  styleUrls: ['./alteracao-produtos.component.css'],
})
export class AlteracaoProdutosComponent implements OnInit {
  produtos!: Produtos;
  colunas: string[] = ['titulo', 'valor', 'descricao', 'categoria', 'acao'];

  constructor(
    private router: Router,
    private produtoService: ProdutosService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getProduto();
  }

  irParaCadastro(): void {
    this.router.navigate(['restrito/produtos']);
  }

  getProduto(): void {
    this.produtoService.getProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error: Error) => {
        this.handleError();
        console.error(error);
      }
    );
  }

  deletar(produto: Produto): void {
    this.produtoService.deletarProduto(produto).subscribe(() => {
      this.alertService.showAlert(
        'Produto excluído com sucesso.',
        AlertTypes.SUCCESS
      );
      this.router.navigate(['restrito']);
    });
  }


  handleError(): void {
    // USAR O ALERT-TYPES DO ALERT SERVICE
    this.alertService.showAlert(
      'Não foi possível carregar as informações, tente mais tarde.',
      AlertTypes.DANGER
    );
  }
}
