import { Usuario } from './../../model/Usuario';
import { Menus } from './../../model/Menu';
import { CarrinhoService } from './../../services/carrinho/carrinho.service';
import { Produto } from 'src/app/core/model/Produto';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalItens!: number;
  usuario!: Usuario

  buttons: Menus =
  [
    {
      nome: "INÍCIO",
      type: "btn-primary",
      router: "",
    },
    {
      nome: "CARDÁPIO",
      type: "btn-primary",
      router: "/cardapio"
    },
    {
      nome: "LOCALIZAÇÃO",
      type: "btn-primary",
      router: "/localizacao"
    },
    {
      nome: "CONTATO",
      type: "btn-primary",
      router: "/contato"
    },

  ]




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
