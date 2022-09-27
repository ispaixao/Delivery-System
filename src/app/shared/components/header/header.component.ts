import { UsuarioService } from 'src/app/core/services/usuario-login/usuario.service';
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

  logout(): void{
    this.usuarioService.logout();
  }
}
