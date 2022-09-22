import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario-login/usuario.service';
import { Usuario } from '../../model/Usuario';
import { tap } from 'rxjs';
const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: Usuario) {
    return this.httpClient.post(`${API}/Login`, usuario).pipe(
      tap((res: any) => {
        const authToken = res.token;
        this.usuarioService.salvaToken(authToken);
      })
    );
  }
}
