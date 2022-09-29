import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto, Produtos } from 'src/app/shared/model/Produto';
import { CarrinhoService } from 'src/app/core/services/carrinho/carrinho.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';

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
