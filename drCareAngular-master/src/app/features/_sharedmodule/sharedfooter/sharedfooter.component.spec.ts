import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedfooterComponent } from './sharedfooter.component';

describe('SharedfooterComponent', () => {
  let component: SharedfooterComponent;
  let fixture: ComponentFixture<SharedfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
