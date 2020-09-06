import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoComercioAdheridoComponent } from './pedido-comercio-adherido.component';

describe('PedidoComercioAdheridoComponent', () => {
  let component: PedidoComercioAdheridoComponent;
  let fixture: ComponentFixture<PedidoComercioAdheridoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoComercioAdheridoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoComercioAdheridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
