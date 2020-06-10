import { TestBed } from '@angular/core/testing';

import { ClinicserService } from './clinicser.service';

describe('ClinicserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinicserService = TestBed.get(ClinicserService);
    expect(service).toBeTruthy();
  });
});
