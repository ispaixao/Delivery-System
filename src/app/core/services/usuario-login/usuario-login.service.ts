import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../../shared/model/Login';
import { TokenService } from '../token/token.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UsuarioLoginService {
  API = environment.API;

  private usuarioSubject = new BehaviorSubject<Login>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.retornaToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as Login;
    this.usuarioSubject.next(usuario);
  }
  retornaUsuario() {
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excluirToken();
    this.usuarioSubject.next({});
  }

  logado() {
    return this.tokenService.possuiToken();
  }
}
