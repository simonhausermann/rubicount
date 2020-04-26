import { TestBed } from '@angular/core/testing';

import { ArrayFunctionsService } from './array-functions.service';

describe('ArrayFunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrayFunctionsService = TestBed.get(ArrayFunctionsService);
    expect(service).toBeTruthy();
  });
});
