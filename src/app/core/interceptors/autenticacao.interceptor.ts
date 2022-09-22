import { Router } from '@angular/router';
import {
  AlertService,
  AlertTypes,
} from './../../shared/services/alert/alert.service';
import { UsuarioService } from './../services/usuario-login/usuario.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {
  constructor(private router: Router, private alertService: AlertService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login']);
    }
    return next.handle(request);
  }
}
