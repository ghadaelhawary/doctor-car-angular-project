import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsupervisorComponent } from './addsupervisor.component';

describe('AddsupervisorComponent', () => {
  let component: AddsupervisorComponent;
  let fixture: ComponentFixture<AddsupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
