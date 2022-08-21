import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produto, Produtos } from '../../model/Produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  carrinhoList: any = [];
  produtoList = new BehaviorSubject<Produtos>([]);

  constructor() {}

  getProdutos(): Observable<Produtos> {
    return this.produtoList.asObservable();
  }

  setProdutos(produto: any) {
    this.carrinhoList.push(...produto);
    this.produtoList.next(produto);
  }

  adicionarCarrinho(produto: any) {
    this.carrinhoList.push(produto);
    this.produtoList.next(this.carrinhoList);
    this.valorTotal();
    console.log(this.carrinhoList);
  }

  valorTotal() {
    let valor_total = 0;
    this.carrinhoList.map((valor: any) => {
      valor_total += valor.total;
    });
  }

  removerItem(produto: any) {
    this.carrinhoList.map((p: any, index: any) => {
      if (produto.id === p.id) {
        this.carrinhoList.splice(index, 1);
      }
    });
  }

  esvaziarCarrinho() {
    this.carrinhoList = [];
    this.produtoList.next(this.carrinhoList);
  }
}
