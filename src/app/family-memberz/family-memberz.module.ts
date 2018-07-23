import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {FamilyMemberzComponent} from './family-memberz.component';
import {FamilyBusinessesComponent} from './family-businesses/family-businesses.component';
import {FamilyCommitteeCitiesComponent} from './family-committee-cities/family-committee-cities.component';
import {FamilyCommitteesComponent} from './family-committees/family-committees.component';
import {FamilyProfilesComponent} from './family-profiles/family-profiles.component';

@NgModule({
  declarations: [
    FamilyMemberzComponent,
    FamilyBusinessesComponent,
    FamilyCommitteeCitiesComponent,
    FamilyCommitteesComponent,
    FamilyProfilesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: []
})

export class FamilyMemberzModule {}
