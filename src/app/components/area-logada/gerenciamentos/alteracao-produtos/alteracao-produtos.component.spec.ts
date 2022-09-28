import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoProdutosComponent } from './alteracao-produtos.component';

describe('AlteracaoProdutosComponent', () => {
  let component: AlteracaoProdutosComponent;
  let fixture: ComponentFixture<AlteracaoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteracaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
