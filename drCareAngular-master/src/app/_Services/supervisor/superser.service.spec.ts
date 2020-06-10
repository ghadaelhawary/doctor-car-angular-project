import { TestBed } from '@angular/core/testing';

import { SuperserService } from './superser.service';

describe('SuperserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperserService = TestBed.get(SuperserService);
    expect(service).toBeTruthy();
  });
});
