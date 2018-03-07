import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindYourBusinessComponent } from './mind-your-business.component';

describe('MindYourBusinessComponent', () => {
  let component: MindYourBusinessComponent;
  let fixture: ComponentFixture<MindYourBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindYourBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindYourBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
