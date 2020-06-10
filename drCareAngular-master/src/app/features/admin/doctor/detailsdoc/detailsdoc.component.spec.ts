import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsdocComponent } from './detailsdoc.component';

describe('DetailsdocComponent', () => {
  let component: DetailsdocComponent;
  let fixture: ComponentFixture<DetailsdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
