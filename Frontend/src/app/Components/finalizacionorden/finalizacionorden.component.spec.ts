import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizacionordenComponent } from './finalizacionorden.component';

describe('FinalizacionordenComponent', () => {
  let component: FinalizacionordenComponent;
  let fixture: ComponentFixture<FinalizacionordenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizacionordenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizacionordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
