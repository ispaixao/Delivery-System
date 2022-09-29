import { UsuarioLoginService } from './../../core/services/usuario-login/usuario-login.service';
import { Login } from 'src/app/shared/model/Login';
import { AutenticacaoService } from './../../core/services/autenticacao/autenticacao.service';
import {AlertService, AlertTypes } from './../../shared/services/alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioLoginService: UsuarioLoginService,
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
    const usuario = this.loginForm.getRawValue() as Login;
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
