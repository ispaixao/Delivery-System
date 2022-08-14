import { Categoria } from 'src/app/core/model/Categoria';
import { CategoriasService } from './categorias.service';
import { Produtos } from './../model/Produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private API = environment.API;

  constructor(
    private httpclient: HttpClient,
  ) {}

  getProdutos(): Observable<Produtos> {
    return this.httpclient.get<Produtos>(`${this.API}/produtos`).pipe();
  }

  getProdutoPorCategoria(id: number): Observable<Produtos> {
    return this.httpclient.get<Produtos>(
      `${this.API}/produtos/?categoria=${id}`
    );
  }
}
