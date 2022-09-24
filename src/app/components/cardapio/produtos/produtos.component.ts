import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalService } from './../../../shared/services/modal/modal.service';
import {
  AlertService,
  AlertTypes,
} from '../../../shared/services/alert/alert.service';
import { CarrinhoService } from './../../../core/services/carrinho/carrinho.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto, Produtos } from 'src/app/shared/model/Produto';

import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/core/services/produto/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos!: Produtos;
  @ViewChild('template') template;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutosService,
    private carrinhoService: CarrinhoService,
    private alertService: AlertService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    const paramId = this.route.snapshot.queryParams['categoria'];
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

  comprar(produto: Produto): void {
    this.modalService.openModal(this.template);
    this.addCarrinho(produto);
  }

  hide(): void {
    this.modalService.hideModal();
  }
}
