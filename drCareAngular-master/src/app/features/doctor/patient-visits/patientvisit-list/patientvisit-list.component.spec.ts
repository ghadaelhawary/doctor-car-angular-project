import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientvisitListComponent } from './patientvisit-list.component';

describe('PatientvisitListComponent', () => {
  let component: PatientvisitListComponent;
  let fixture: ComponentFixture<PatientvisitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientvisitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientvisitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
