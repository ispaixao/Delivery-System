import { Produto } from 'src/app/shared/model/Produto';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class CadastroProdutoService {
  constructor(private httpClient: HttpClient) {}

  cadastrar(produto: Produto) {
    return this.httpClient.post(`${API}/Produto`, produto);
  }
}
