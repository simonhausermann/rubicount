import { TestBed } from '@angular/core/testing';

import { ScramblesService } from './scrambles.service';

describe('ScramblesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScramblesService = TestBed.get(ScramblesService);
    expect(service).toBeTruthy();
  });
});
