import { TestBed } from '@angular/core/testing';

import { DoctorserService } from './doctorser.service';

describe('DoctorserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorserService = TestBed.get(DoctorserService);
    expect(service).toBeTruthy();
  });
});
