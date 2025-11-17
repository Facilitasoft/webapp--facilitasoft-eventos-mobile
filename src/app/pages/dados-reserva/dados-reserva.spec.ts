import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosReserva } from './dados-reserva';

describe('DadosReserva', () => {
  let component: DadosReserva;
  let fixture: ComponentFixture<DadosReserva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosReserva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosReserva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
