import {
  AlertService,
  AlertTypes,
} from './../../../../shared/services/alert/alert.service';
import { UsuarioService } from '../../../../core/services/usuario/usuario.service';
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
import { ActivatedRoute, Router } from '@angular/router';

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
  ) {}

  ngOnInit(): void {}

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
