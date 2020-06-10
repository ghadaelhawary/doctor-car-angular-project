import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsupervisorComponent } from './editsupervisor.component';

describe('EditsupervisorComponent', () => {
  let component: EditsupervisorComponent;
  let fixture: ComponentFixture<EditsupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
