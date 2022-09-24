import { environment } from 'src/environments/environment';
import { Categorias } from '../../../shared/model/Categoria';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private API = environment.API;

  constructor(private httpClient: HttpClient) {}

  getCategorias(): Observable<Categorias> {
    return this.httpClient.get<Categorias>(`${this.API}/Categoria`);
  }
}
