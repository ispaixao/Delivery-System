import { AutenticacaoService } from './../../core/services/autenticacao/autenticacao.service';
import { TokenService } from './../../core/services/token/token.service';
import {
  AlertService,
  AlertTypes,
} from './../../shared/services/alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/shared/model/Usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario-login/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private alertService: AlertService,
    private autenticacaoService: AutenticacaoService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', Validators.required],
    });
  }

  validar(): void {
    const usuario = this.loginForm.getRawValue() as Usuario;
    this.autenticacaoService.autenticar(usuario).subscribe(
      () => {
        this.router.navigate(['restrito']);
      },
      (error) => {
        this.alertService.showAlert(
          'Usuário ou senha inválidos, tente novamente.',
          AlertTypes.DANGER
        );
      }
    );
  }
}
