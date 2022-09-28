import { Produto, Produtos } from '../../../shared/model/Produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private API = environment.API;

  constructor(private httpclient: HttpClient) {}

  getProdutosPorCategoria(categoria: string): Observable<Produtos> {
    return this.httpclient.get<Produtos>(
      `${this.API}/Produto/categoria=${categoria}`
    );
  }

  getProdutos(): Observable<Produtos> {
    return this.httpclient.get<Produtos>(`${this.API}/Produto`);
  }

  getProdutoPorId(id: number): Observable<Produto> {
    return this.httpclient.get<Produto>(`${this.API}/Produto/id/${id}`);
  }

  deletarProduto(produto: Produto): Observable<Produto> {
    return this.httpclient.delete<Produto>(`${this.API}/Produto/${produto.id}`);
  }

  atualizarProduto(produto: Produto): Observable<Produto> {
    return this.httpclient.put<Produto>(
      `${this.API}/Produto/${produto.id}`,
      produto
    );
  }
}
