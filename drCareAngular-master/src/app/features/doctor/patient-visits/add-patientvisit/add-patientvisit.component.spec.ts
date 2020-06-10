import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientvisitComponent } from './add-patientvisit.component';

describe('AddPatientvisitComponent', () => {
  let component: AddPatientvisitComponent;
  let fixture: ComponentFixture<AddPatientvisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatientvisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
