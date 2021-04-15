import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Landing1Component } from './landing1.component';

describe('Landing1Component', () => {
  let component: Landing1Component;
  let fixture: ComponentFixture<Landing1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Landing1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Landing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
