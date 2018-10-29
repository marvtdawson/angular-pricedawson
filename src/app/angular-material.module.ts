import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatPaginatorModule,
  MatCardModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatInputModule,
  MatIconRegistry,
  MatSelectModule,
  MatOptionModule,
  MatSnackBarModule,
} from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule,
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [ MatIconRegistry ],
})
export class AngularMaterialModule {}
