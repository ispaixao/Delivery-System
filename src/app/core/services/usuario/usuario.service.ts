import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from 'src/app/shared/model/Usuario';
import { environment } from 'src/environments/environment';
import { Usuario } from '../../../shared/model/Usuario';
const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {



  constructor(private httpClient: HttpClient) {}

  cadastrar(usuario: Usuario){

    return this.httpClient.post(`${API}/usuarios/cadastrar`, usuario);
  }


  deletar(usuario: Usuario){
    return this.httpClient.delete<Usuario>(`${API}/usuarios?id=${usuario.id}`);
  }

  getUsuarios(): Observable<Usuarios>{
    return this.httpClient.get<Usuarios>(`${API}/usuarios/listar`)
  }

  getUsuarioPorId(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${API}/usuarios/listar/id=${id}`);
  }

}
