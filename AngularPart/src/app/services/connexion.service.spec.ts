import { TestBed } from '@angular/core/testing';

import { ConnexionService } from './connexion.service';

describe('ConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnexionService = TestBed.get(ConnexionService);
    expect(service).toBeTruthy();
  });
});
