import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../../shared/model/Usuario';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class CadastroUsuarioService {



  constructor(private httpClient: HttpClient) {}

  cadastrar(usuario: Usuario){

    return this.httpClient.post(`${API}/usuarios/cadastrar`, usuario);


  }
}
