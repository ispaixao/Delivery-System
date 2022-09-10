import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  API = environment.API;

  constructor(private httpClient: HttpClient) {}

  logar(email: string, senha: string) {}
}
