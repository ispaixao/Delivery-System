import { CardProduto } from 'src/app/core/model/CardProduto';
import { CardapioComponent } from './../../components/cardapio/cardapio.component';
import { Categoria } from './../model/Categoria';
import { CardProdutos } from './../model/CardProduto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private API = environment.API;

  constructor(private httpclient: HttpClient) {}

  getProdutos(): Observable<CardProdutos> {
    return this.httpclient.get<CardProdutos>(`${this.API}/produtos`).pipe();
  }

  getProdutoPorCategoria(categoria: number): Observable<CardProdutos> {
    return this.httpclient.get<CardProdutos>(
      `${this.API}/produtos/?categoria=${categoria}`
    );
  }
}
