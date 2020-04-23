import { TestBed } from '@angular/core/testing';

import { CompetanceService } from './competance.service';

describe('CompetanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompetanceService = TestBed.get(CompetanceService);
    expect(service).toBeTruthy();
  });
});
