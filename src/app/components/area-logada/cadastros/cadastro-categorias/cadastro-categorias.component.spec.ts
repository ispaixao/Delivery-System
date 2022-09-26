import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCategoriasComponent } from './cadastro-categorias.component';

describe('CadastroCategoriasComponent', () => {
  let component: CadastroCategoriasComponent;
  let fixture: ComponentFixture<CadastroCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
