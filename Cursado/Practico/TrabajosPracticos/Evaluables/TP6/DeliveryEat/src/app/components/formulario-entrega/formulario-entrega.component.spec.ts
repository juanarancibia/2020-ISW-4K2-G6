import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEntregaComponent } from './formulario-entrega.component';

describe('FormularioEntregaComponent', () => {
  let component: FormularioEntregaComponent;
  let fixture: ComponentFixture<FormularioEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
