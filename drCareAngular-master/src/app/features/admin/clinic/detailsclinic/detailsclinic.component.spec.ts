import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsclinicComponent } from './detailsclinic.component';

describe('DetailsclinicComponent', () => {
  let component: DetailsclinicComponent;
  let fixture: ComponentFixture<DetailsclinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsclinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
