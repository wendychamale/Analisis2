import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoOrdenRestauranteComponent } from './estado-orden-restaurante.component';

describe('EstadoOrdenRestauranteComponent', () => {
  let component: EstadoOrdenRestauranteComponent;
  let fixture: ComponentFixture<EstadoOrdenRestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoOrdenRestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoOrdenRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
