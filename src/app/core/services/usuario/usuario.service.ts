import { Router } from '@angular/router';
import { tap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  API = environment.API;

  constructor(private httpClient: HttpClient, private router: Router) {}

  logar(usuario: any): Observable<HttpResponse<any>> {
    console.log(usuario);
    return this.httpClient.post(`${this.API}/Login`, usuario, {
      observe: 'response'}
      );

  }
}
