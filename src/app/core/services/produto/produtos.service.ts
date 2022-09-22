import { Produtos } from '../../model/Produto';
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

  getProdutos(categoria: string): Observable<Produtos> {
    return this.httpclient.get<Produtos>(
      `${this.API}/Produto/categoria=${categoria}`
    );
  }


}
