import {
  AlertService,
  AlertTypes,
} from './../../shared/services/alert/alert.service';
import { UsuarioService } from './../../core/services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/core/model/Usuario';
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
    private usuarioService: UsuarioService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', Validators.required],
    });
  }

  validar(): void {
    const usuario = this.loginForm.getRawValue() as Usuario;
    this.usuarioService.logar(usuario).subscribe(
      () => {
        this.router.navigate(['interno']);
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
