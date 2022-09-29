import { TestBed } from '@angular/core/testing';

import { UsuarioLoginService } from './usuario-login.service';

describe('UsuarioService', () => {
  let service: UsuarioLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
