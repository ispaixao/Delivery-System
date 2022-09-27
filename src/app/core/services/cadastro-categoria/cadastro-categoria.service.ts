import { environment } from 'src/environments/environment';
import { Categoria } from 'src/app/shared/model/Categoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API = environment.API;
@Injectable({
  providedIn: 'root',
})
export class CadastroCategoriaService {
  constructor(private httpClient: HttpClient) {}

  cadastrar(categoria: Categoria) {
    return this.httpClient.post(`${API}/Categoria`, categoria);
  }
}
