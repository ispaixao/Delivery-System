import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  /* Definição de Interceptor = Realizar alguma operação enquanto a requisição para o servidor
  não retorna.*/

  private activeRequests = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    /* ActiveRequests guarda a quantidade de requisições, se for igual a 0,
    mostra a barra de carregamento e incrementa um valor na variavel*/

    if (this.activeRequests === 0) {
      this.loadingService.show();
    }

    this.activeRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        /* Após finalizar as requisições e o valor do ActiveRequest voltar para 0,
        o loading não mostrará.*/
        this.activeRequests--;

        if (this.activeRequests === 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}

