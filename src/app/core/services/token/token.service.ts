import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  token = 'token';
  private API = environment.API;

  constructor(private httpClient: HttpClient) {}

  public salvaToken(token: string) {
    localStorage.setItem(this.token, token);
  }

  public retornaToken() {
    return localStorage.getItem(this.token) ?? '';
  }

  public excluirToken() {
    localStorage.clear();
  }

  public possuiToken() {
    return localStorage.getItem(this.token);
  }
}
