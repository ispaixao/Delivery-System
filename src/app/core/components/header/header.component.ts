import { UsuarioService } from 'src/app/core/services/usuario-login/usuario.service';
import { Usuario } from './../../model/Usuario';
import { Menus } from './../../model/Menu';
import { CarrinhoService } from './../../services/carrinho/carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalItens!: number;
  usuario!: Usuario;

  buttons: Menus = [
    {
      nome: 'INÍCIO',
      type: 'btn-primary',
      router: '',
    },
    {
      nome: 'CARDÁPIO',
      type: 'btn-primary',
      router: '/cardapio',
    },
    {
      nome: 'LOCALIZAÇÃO',
      type: 'btn-primary',
      router: '/localizacao',
    },
    {
      nome: 'CONTATO',
      type: 'btn-primary',
      router: '/contato',
    },
  ];

  constructor(
    private carrinhoService: CarrinhoService,
    private usuarioService: UsuarioService
  ) {}
  ngOnInit(): void {
    this.getCarrinho();
  }

  getCarrinho() {
    this.carrinhoService.getProdutos().subscribe((itens) => {
      this.totalItens = itens.length;
    });
  }

  logado(): boolean {
    if (this.usuarioService.logado() != null) {
      return true;
    }
    return false;
  }
}
