import { Router } from '@angular/router';
import { ModalService } from './../../shared/services/modal/modal.service';
import { CarrinhoService } from './../../core/services/carrinho/carrinho.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto, Produtos } from 'src/app/shared/model/Produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  produtos!: Produtos;
  valorProdutos!: number;
  valorTotal!: number;
  desconto!: number;

  constructor(
    private carrinhoService: CarrinhoService,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCarrinho();
    console.log(this.produtos);
  }

  getCarrinho(): void {
    this.carrinhoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
      this.valorTotal = this.carrinhoService.valorTotal();
      this.valorProdutos = this.carrinhoService.valorProdutos();

      this.valorTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    });
  }

  aplicarDesconto(cupom: string): void {
    let valor = 50.0;

    if (cupom === 'PRIMEIRACOMPRA') {
      this.desconto = valor;
      this.valorTotal -= this.desconto;
    }
  }

  removerItem(item: Produto): void {
    this.carrinhoService.removerItem(item);
  }
  removerTodos(): void {
    this.carrinhoService.esvaziarCarrinho();
  }
}
