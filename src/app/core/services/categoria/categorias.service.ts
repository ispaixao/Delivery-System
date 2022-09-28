import {
  AlertService,
  AlertTypes,
} from './../../../shared/services/alert/alert.service';
import { environment } from 'src/environments/environment';
import { Categoria, Categorias } from '../../../shared/model/Categoria';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private API = environment.API;

  constructor(
    private httpClient: HttpClient,
    private alertService: AlertService
  ) {}

  getCategorias(): Observable<Categorias> {
    return this.httpClient.get<Categorias>(`${this.API}/Categoria`);
  }

  getCategoriaPorId(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(`${this.API}/Categoria/${id}`);
  }

  atualizarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.httpClient.put<Categoria>(
      `${this.API}/Categoria/${categoria.id}`,
      categoria
    );
  }

  deletarCategoria(categoria: Categoria): any {
    return this.httpClient
      .delete<Categoria>(`${this.API}/Categoria/${categoria.id}`);
  }
}
