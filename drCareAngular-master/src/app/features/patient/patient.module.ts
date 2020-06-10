import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { SharedmoduleModule } from '../_sharedmodule/sharedmodule.module';
import { ProfileComponent } from './profile/profile.component';
import { PatientComponent } from './patient/patient.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    // PatientListComponent,
    ProfileComponent,
    PatientComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedmoduleModule
  ]
})
export class PatientModule { }
