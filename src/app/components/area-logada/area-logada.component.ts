import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario-login/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Menus } from 'src/app/shared/model/Menu';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.css'],
})
export class AreaLogadaComponent implements OnInit {

  hide = true;

  list_menu: Menus = [
    {
      nome: 'Dashboard',
      type: '',
      router: ''
    },
    {
      nome: 'Cadastro de usuários',
      type: '',
      router: ''
    },
    {
      nome: 'Cadastro de produtos',
      type: '',
      router: ''
    },
    {
      nome: 'Cadastro de categorias',
      type: '',
      router: ''
    },
    {
      nome: 'Gerenciar usuários',
      type: '',
      router: ''
    },


  ]


  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
