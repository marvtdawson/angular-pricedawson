import {NgModule} from '@angular/core';
import {PastReunionsComponent} from './past-reunions/past-reunions.component';
import {NewReunionComponent} from './new-reunion/new-reunion.component';
import {ReunionsComponent} from './reunions.component';

@NgModule({
  declarations: [
    ReunionsComponent,
    PastReunionsComponent,
    NewReunionComponent,
  ],
  imports: [],
  providers: [],
  exports: []
})

export class ReunionsModule {}
