import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoOrdenClienteComponent } from './estado-orden-cliente.component';

describe('EstadoOrdenClienteComponent', () => {
  let component: EstadoOrdenClienteComponent;
  let fixture: ComponentFixture<EstadoOrdenClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoOrdenClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoOrdenClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
