import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoInformacaoComponent } from './pedido-informacao.component';

describe('PedidoInformacaoComponent', () => {
  let component: PedidoInformacaoComponent;
  let fixture: ComponentFixture<PedidoInformacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoInformacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
