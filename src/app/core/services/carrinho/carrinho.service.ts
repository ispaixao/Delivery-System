import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto, Produtos } from '../../model/Produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  carrinhoList: Produtos = [];
  produtoList = new BehaviorSubject<Produtos>([]);

  constructor() {}

  getProdutos(): Observable<Produtos> {
    return this.produtoList.asObservable();
  }

  adicionarCarrinho(produto: Produto) {
    this.carrinhoList.push(produto);
    this.produtoList.next(this.carrinhoList);

    this.valorTotal();
  }

  valorProdutos(): number {
    let valor = 0;
    this.carrinhoList.map((produto: Produto) => {
      valor += produto.valor;
    });

    return valor;
  }

  valorTotal(): number {
    let valor_total = 0;
    this.carrinhoList.map((produto: Produto) => {
      valor_total += produto.valor;
    });

    return valor_total;
  }

  removerItem(produto: Produto) {
    this.carrinhoList.map((p: Produto, index: number) => {
      if (produto.id === p.id) {
        this.carrinhoList.splice(index, 1);
      }
    });
    this.produtoList.next(this.carrinhoList);
  }

  esvaziarCarrinho() {
    this.carrinhoList = [];
    this.produtoList.next(this.carrinhoList);
  }
}
