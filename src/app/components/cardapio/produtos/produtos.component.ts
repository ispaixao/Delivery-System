import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto, Produtos } from 'src/app/core/model/Produto';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  cardProdutos!: Produtos;

  constructor(
    private router: Router,
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProdutosPorId();
  }

  getProdutosPorId(): void {
    const paramId = this.route.snapshot.queryParams['titulo'];
    console.log(paramId);
    const param = paramId || '';

    this.produtoService.getProdutoPorCategoria(param).subscribe((produto) => {
      this.cardProdutos = produto;
    });
  }

  voltar(): void {
    this.router.navigate(['/cardapio']);
  }
}
