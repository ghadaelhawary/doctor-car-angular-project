import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { SharedmoduleModule } from "../_sharedmodule/sharedmodule.module";

import { DoctorRoutingModule } from "./doctor-routing.module";
import { PatientListComponent } from "./patient-list/patient-list.component";
import { DoctorComponent } from "./doctor/doctor.component";
import { PatientDetailsComponent } from "./patient-details/patient-details.component";
import { PatientvisitListComponent } from "./patient-visits/patientvisit-list/patientvisit-list.component";
import { PatientvisitDetailsComponent } from "./patient-visits/patientvisit-details/patientvisit-details.component";
import { AddPatientvisitComponent } from "./patient-visits/add-patientvisit/add-patientvisit.component";
import { NavComponent } from "./nav/nav.component";

@NgModule({
  declarations: [
    PatientListComponent,
    DoctorComponent,
    PatientDetailsComponent,
    PatientvisitListComponent,
    PatientvisitDetailsComponent,
    AddPatientvisitComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    HttpClientModule,
    SharedmoduleModule,
    FormsModule,
    ReactiveFormsModule,
    SharedmoduleModule,
    // BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class DoctorModule {}
