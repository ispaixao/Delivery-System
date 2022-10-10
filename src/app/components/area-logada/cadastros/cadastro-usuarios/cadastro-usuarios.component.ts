import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, Validators
} from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/Usuario';
import { UsuarioService } from '../../../../core/services/usuario/usuario.service';
import {
  AlertService,
  AlertTypes
} from './../../../../shared/services/alert/alert.service';
import { senhaValidator } from './validators/senha.validators';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
})
export class CadastroUsuariosComponent implements OnInit {
  editUsuario = false;
  usuario!: Usuario;

  formUsuario = this.formBuilder.group({
    Nome: ['', [Validators.required]],
    Email: ['', [Validators.email, Validators.required]],
    Telefone: ['', Validators.required],
    CPF: ['', [Validators.minLength(11), Validators.required]],
    dataNascimento: ['', [Validators.required]],
    Senha: ['', [Validators.minLength(8), Validators.required], senhaValidator],
    ConfirmSenha: ['', [Validators.required], senhaValidator],
    Cargo: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  validar(): void {
    const usuario = this.formUsuario.getRawValue() as Usuario;
    this.usuarioService.cadastrar(usuario).subscribe(() => {
      this.alertService.showAlert(
        'Usuário cadastrado com sucesso.',
        AlertTypes.SUCCESS
      );
      this.router.navigate(['restrito']);
    });
  }
}
