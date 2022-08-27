import {
  AlertService,
  AlertTypes,
} from './../../../shared/services/alert.service';
import { CarrinhoService } from './../../../core/services/carrinho/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Produto, Produtos } from 'src/app/core/model/Produto';

import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/core/services/produto/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos!: Produtos;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    private carrinhoService: CarrinhoService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    const paramId = this.route.snapshot.queryParams['titulo'];
    console.log(paramId);
    const param = paramId || '';

    this.produtoService.getProdutos(param).subscribe(
      (produto) => {
        this.produtos = produto;
        this.produtos.forEach((p) => {
          Object.assign(p, { quantidade: 1, total: p.valor });
        });
      },
      (error: Error) => {
        this.handleError();
      }
    );
  }

  voltar(): void {
    this.router.navigate(['/cardapio']);
  }

  addCarrinho(produto: Produto) {
    this.carrinhoService.adicionarCarrinho(produto);
  }

  handleError(): void {
    // USAR O ALERT-TYPES DO ALERT SERVICE
    this.alertService.showAlert(
      'Não foi possível carregar os produtos, tente mais tarde',
      AlertTypes.DANGER
    );
  }
}
