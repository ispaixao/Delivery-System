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
  valorTotal!: number;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.getCarrinho();
    console.log(this.produtos);
  }

  getCarrinho(): void {
    this.carrinhoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
      this.valorTotal = this.carrinhoService.valorTotal();
    });
  }

  removerItem(item: Produto): void {
    this.carrinhoService.removerItem(item);
  }
  removerTodos(): void {
    this.carrinhoService.esvaziarCarrinho();
  }
}
