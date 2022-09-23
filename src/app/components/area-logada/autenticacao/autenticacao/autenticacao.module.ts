import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacaoComponent } from './autenticacao.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacaoInterceptor } from 'src/app/core/interceptors/autenticacao.interceptor';

@NgModule({
  imports: [CommonModule],
  declarations: [AutenticacaoComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
  ],
})
export class AutenticacaoModule {}
