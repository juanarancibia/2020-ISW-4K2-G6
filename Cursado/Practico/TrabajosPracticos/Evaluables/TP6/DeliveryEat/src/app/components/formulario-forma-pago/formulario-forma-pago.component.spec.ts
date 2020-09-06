import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFormaPagoComponent } from './formulario-forma-pago.component';

describe('FormularioFormaPagoComponent', () => {
  let component: FormularioFormaPagoComponent;
  let fixture: ComponentFixture<FormularioFormaPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioFormaPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioFormaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
