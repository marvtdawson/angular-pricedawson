import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteescityComponent } from './committeescity.component';

describe('CommitteescityComponent', () => {
  let component: CommitteescityComponent;
  let fixture: ComponentFixture<CommitteescityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitteescityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteescityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
