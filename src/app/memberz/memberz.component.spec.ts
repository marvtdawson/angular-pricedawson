import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberzComponent } from './memberz.component';

describe('MemberzComponent', () => {
  let component: MemberzComponent;
  let fixture: ComponentFixture<MemberzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
