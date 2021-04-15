import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPComponent } from './catalogo-p.component';

describe('CatalogoPComponent', () => {
  let component: CatalogoPComponent;
  let fixture: ComponentFixture<CatalogoPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
