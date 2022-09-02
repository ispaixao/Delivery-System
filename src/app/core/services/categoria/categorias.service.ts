import { environment } from 'src/environments/environment';
import { Categoria, Categorias } from '../../model/Categoria';
import { Observable, tap, catchError, mapTo } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../../model/Produto';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private API = environment.API;

  constructor(private httpClient: HttpClient) {}

  getCategorias(): Observable<Categorias> {
    return this.httpClient.get<Categorias>(`${this.API}/categoria`).pipe();
  }

  getCategoriasPorID(categoriaId: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(
      `${this.API}/categoria=${categoriaId}`
    );
  }
}
