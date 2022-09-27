import { CadastroUsuarioService } from './../../../../core/services/cadastro-usuario/cadastro-usuario.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { Usuario } from 'src/app/shared/model/Usuario';
import { senhaValidator } from './validators/senha.validators';
import {
  MatCheckboxDefaultOptions,
  MAT_CHECKBOX_DEFAULT_OPTIONS,
} from '@angular/material/checkbox';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
})
export class CadastroUsuariosComponent implements OnInit {
  formUsuario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroUsuarioService
  ) {}

  ngOnInit(): void {
    this.formUsuario = this.formBuilder.group(
      {
        Nome: ['', [Validators.required]],
        Email: ['', [Validators.email, Validators.required]],
        Telefone: ['', Validators.required],
        CPF: ['', [Validators.minLength(11), Validators.required]],
        DataNascimento: ['', [Validators.required]],
        Senha: ['', [Validators.minLength(8), Validators.required]],
        ConfirmSenha: ['', [Validators.required]],
        Cargo: ['', Validators.required],
      },
      {
        validators: [senhaValidator],
      }
    );
  }

  validar(): void {
    const usuario = this.formUsuario.getRawValue() as Usuario;
    this.cadastroService.cadastrar(usuario).subscribe();
  }
}
