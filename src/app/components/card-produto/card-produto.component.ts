import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto, Produtos } from 'src/app/core/model/Produto';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class CardProdutoComponent implements OnInit {
  @Input() cardProdutos!: Produtos;

  constructor() {}

  ngOnInit(): void {}
}
