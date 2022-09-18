import { TestBed } from '@angular/core/testing';

import { AreaLogadaGuard } from './area-logada.guard';

describe('AreaLogadaGuard', () => {
  let guard: AreaLogadaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AreaLogadaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
