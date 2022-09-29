import { UsuarioLoginService } from './../usuario-login/usuario-login.service';
import { Login } from 'src/app/shared/model/Login';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioLoginService: UsuarioLoginService
  ) {}

  autenticar(usuario: Login) {
    return this.httpClient.post(`${API}/Login`, usuario).pipe(
      tap((res: any) => {
        const authToken = res.token;
        this.usuarioLoginService.salvaToken(authToken);
      })
    );
  }
}
