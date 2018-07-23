import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastReunionsComponent } from './past-reunions.component';

describe('PastReunionsComponent', () => {
  let component: PastReunionsComponent;
  let fixture: ComponentFixture<PastReunionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastReunionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastReunionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
