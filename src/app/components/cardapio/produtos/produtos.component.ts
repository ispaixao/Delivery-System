import { Component, Input, OnInit } from '@angular/core';
import { Produto, Produtos } from 'src/app/core/model/Produto';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from 'src/app/core/model/Dialog';
import { DialogComponent } from 'src/app/core/components/dialog/dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/core/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
   produtos!: Produtos;

  constructor(
    private dialog: MatDialog,
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

  adicionarCarrinho(): void {
    const dialogData: Dialog = {
      cancelar: '',
      confirmar: '',
      conteudo: 'Deseja ir para o carrinho?',
    };

    const dialogDataRef = this.dialog.open(DialogComponent, {
      data: dialogData,
      width: '300px',
    });

    dialogDataRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate(['/carrinho']);
      }
    });
  }
}
