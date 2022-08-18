import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { Produtos } from 'src/app/core/model/Produto';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from 'src/app/core/model/Dialog';
import { DialogComponent } from 'src/app/core/components/dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class CardProdutoComponent implements OnInit {
  @Input() cardProdutos!: Produtos;

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

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
        this.router.navigate(['']);
      }
    });
  }
}
