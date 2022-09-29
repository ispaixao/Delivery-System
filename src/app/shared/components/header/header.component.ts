import { UsuarioLoginService } from './../../../core/services/usuario-login/usuario-login.service';
import { Login } from '../../../shared/model/Login';
import { Menus } from '../../../shared/model/Menu';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/core/services/carrinho/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalItens!: number;
  usuario_logado!: Login;

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
    {
      nome: 'SOBRE NÓS',
      type: 'btn-primary',
      router: '/sobre-nos',
    },
  ];

  constructor(
    private carrinhoService: CarrinhoService,
    private usuarioLoginService: UsuarioLoginService
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
    if (this.usuarioLoginService.logado() != null) {
      return true;
    }
    return false;
  }

  logout(): void {
    this.usuarioLoginService.logout();
  }
}
