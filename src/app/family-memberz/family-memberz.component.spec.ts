import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMemberzComponent } from './family-memberz.component';

describe('FamilyMemberzComponent', () => {
  let component: FamilyMemberzComponent;
  let fixture: ComponentFixture<FamilyMemberzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyMemberzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMemberzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
