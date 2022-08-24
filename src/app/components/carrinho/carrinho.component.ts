import { CarrinhoService } from './../../core/services/carrinho/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Produto, Produtos } from 'src/app/core/model/Produto';

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

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.getCarrinho();
    console.log(this.produtos);
  }

  getCarrinho(): void {
    this.carrinhoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
      this.valorTotal = this.carrinhoService.valorTotal();
      this.valorProdutos = this.carrinhoService.valorProdutos();
    });
  }

  aplicarDesconto(cupom: string): void {
    let valor = 50.00;

    if (cupom === 'PRIMEIRACOMPRA') {
      this.desconto = valor;
      this.valorTotal -= this.desconto;
      this.valorTotal.toFixed(2);
    }
  }

  removerItem(item: Produto): void {
    this.carrinhoService.removerItem(item);
  }
  removerTodos(): void {
    this.carrinhoService.esvaziarCarrinho();
  }
}
