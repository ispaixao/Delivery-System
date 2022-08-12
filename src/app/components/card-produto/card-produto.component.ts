import { Categoria } from 'src/app/core/model/Categoria';
import { CardProdutos } from './../../core/model/CardProduto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardProduto } from 'src/app/core/model/CardProduto';
import { Produto } from 'src/app/core/model/Produto';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class CardProdutoComponent implements OnInit {
  @Input() cardProdutos!: CardProdutos;

  constructor() {}

  ngOnInit(): void {}
}
