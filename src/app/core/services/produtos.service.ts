import { Categoria } from 'src/app/core/model/Categoria';
import { CategoriasService } from './categorias.service';
import { Produtos } from '../model/Produto';
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

  constructor(private httpclient: HttpClient) {}

  getProdutos(): Observable<Produtos> {
    return this.httpclient.get<Produtos>(`${this.API}/produtos`).pipe();
  }

  // GET SERÁ PELO NOME DA CATEGORIA.

  getProdutoPorCategoria(categoria: string): Observable<Produtos> {
    return this.httpclient.get<Produtos>(
      `${this.API}/produtos/?categoria=${categoria}`
    );
  }

  getProdutoSelecionado(id: number): Observable<Produto>{
    return this.httpclient.get<Produto>(
      `${this.API}/produtos?id=${id}`
    );
  }

}
