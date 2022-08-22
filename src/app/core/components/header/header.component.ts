import { CarrinhoService } from './../../services/carrinho/carrinho.service';
import { Produto } from 'src/app/core/model/Produto';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalItens!: number;
  constructor(private carrinhoService: CarrinhoService) {}
  ngOnInit(): void {
    this.getCarrinho();
  }

  getCarrinho() {
    this.carrinhoService.getProdutos().subscribe((itens) => {
      this.totalItens = itens.length;
    });
  }
}
