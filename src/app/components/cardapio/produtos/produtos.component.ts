import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto, Produtos } from 'src/app/core/model/Produto';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos!: Produtos;

  constructor(
    private router: Router,
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    const paramId = this.route.snapshot.queryParams['titulo'];
    console.log(paramId);
    const param = paramId || '';

    this.produtoService.getProdutos(param).subscribe((produto) => {
      this.produtos = produto;
    });
  }

  voltar(): void {
    this.router.navigate(['/cardapio']);
  }
}
