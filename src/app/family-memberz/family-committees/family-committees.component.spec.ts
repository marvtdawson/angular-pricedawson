import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyCommitteesComponent } from './committees.component';

describe('FamilyCommitteesComponent', () => {
  let component: FamilyCommitteesComponent;
  let fixture: ComponentFixture<FamilyCommitteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyCommitteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyCommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
