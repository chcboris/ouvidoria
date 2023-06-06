import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmOcorrenciaComponent } from './adm-ocorrencia.component';

describe('AdmOcorrenciaComponent', () => {
  let component: AdmOcorrenciaComponent;
  let fixture: ComponentFixture<AdmOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmOcorrenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
