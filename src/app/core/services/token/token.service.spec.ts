/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { TokenService } from './token.service';

describe('Service: Token', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenService]
    });
  });

  it('should ...', inject([TokenService], (service: TokenService) => {
    expect(service).toBeTruthy();
  }));
});
