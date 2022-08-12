import { map, tap } from 'rxjs';
import { Categoria } from 'src/app/core/model/Categoria';
import { CardProduto, CardProdutos } from './../../../core/model/CardProduto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/core/model/Produto';
import { ProdutosService } from 'src/app/core/services/produtos.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { Title } from '@angular/platform-browser';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  cardProdutos!: CardProdutos;
  produto$!: Produto[];


  constructor(
    private router: Router,
    private produtoService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.getProdutosCategoria(3);
  }

  getProdutosCategoria(categoria: number): void {
    this.produtoService
      .getProdutoPorCategoria(categoria)
      .subscribe((categoria) => (this.cardProdutos = categoria));
  }



  getProdutos(): void {
    this.produtoService.getProdutos().subscribe(
      (produtos) => {
        this.cardProdutos = produtos;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  voltar(): void {
    this.router.navigate(['/cardapio']);
  }
}
