import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailssuperComponent } from './detailssuper.component';

describe('DetailssuperComponent', () => {
  let component: DetailssuperComponent;
  let fixture: ComponentFixture<DetailssuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailssuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailssuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
