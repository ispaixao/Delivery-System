import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoUsuariosComponent } from './alteracao-usuarios.component';

describe('AlteracaoUsuariosComponent', () => {
  let component: AlteracaoUsuariosComponent;
  let fixture: ComponentFixture<AlteracaoUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteracaoUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteracaoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
