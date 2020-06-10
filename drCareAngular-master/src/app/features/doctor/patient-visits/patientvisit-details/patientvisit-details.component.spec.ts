import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientvisitDetailsComponent } from './patientvisit-details.component';

describe('PatientvisitDetailsComponent', () => {
  let component: PatientvisitDetailsComponent;
  let fixture: ComponentFixture<PatientvisitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientvisitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientvisitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
