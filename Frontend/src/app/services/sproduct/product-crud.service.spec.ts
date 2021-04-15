import { TestBed } from '@angular/core/testing';

import { ProductCrudService } from './product-crud.service';

describe('ProductCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCrudService = TestBed.get(ProductCrudService);
    expect(service).toBeTruthy();
  });
});
