import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';
import { Usuario, Usuarios } from 'src/app/shared/model/Usuario';
import {
  AlertService,
  AlertTypes
} from './../../../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-alteracao-usuarios',
  templateUrl: './alteracao-usuarios.component.html',
  styleUrls: ['./alteracao-usuarios.component.css'],
})
export class AlteracaoUsuariosComponent implements OnInit {
  usuarios!: Usuarios;
  colunas: string[] = ['nome', 'email', 'cpf', 'telefone', 'acao'];

  constructor(
    private usuarioService: UsuarioService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  deletar(usuario: Usuario): void {
    this.usuarioService.deletar(usuario).subscribe(() => {
      this.alertService.showAlert(
        'Usuário excluído com sucesso.',
        AlertTypes.SUCCESS
      );
      this.router.navigate(['restrito']);
    });
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      },
      (error: Error) => {
        this.handleError();
        console.error(error);
      }
    );
  }

  handleError(): void {
    // USAR O ALERT-TYPES DO ALERT SERVICE
    this.alertService.showAlert(
      'Não foi possível carregar as informações, tente mais tarde.',
      AlertTypes.DANGER
    );
  }
}
