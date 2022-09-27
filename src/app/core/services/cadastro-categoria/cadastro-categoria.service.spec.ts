import { TestBed } from '@angular/core/testing';

import { CadastroCategoriaService } from './cadastro-categoria.service';

describe('CadastroCategoriaService', () => {
  let service: CadastroCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
