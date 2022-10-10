/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

describe('Service: Autenticacao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacaoService]
    });
  });

  it('should ...', inject([AutenticacaoService], (service: AutenticacaoService) => {
    expect(service).toBeTruthy();
  }));
});
