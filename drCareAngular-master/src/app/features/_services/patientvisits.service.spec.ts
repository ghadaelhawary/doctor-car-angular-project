import { TestBed } from '@angular/core/testing';

import { PatientvisitsService } from './patientvisits.service';

describe('PatientvisitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientvisitsService = TestBed.get(PatientvisitsService);
    expect(service).toBeTruthy();
  });
});
