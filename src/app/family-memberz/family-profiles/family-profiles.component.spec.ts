import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyProfilesComponent } from './family-profiles.component';

describe('FamilyProfilesComponent', () => {
  let component: FamilyProfilesComponent;
  let fixture: ComponentFixture<FamilyProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
