import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoctorComponent } from "./doctor/doctor.component";
import { PatientListComponent } from "./patient-list/patient-list.component";
import { PatientDetailsComponent } from "./patient-details/patient-details.component";
import { PatientvisitListComponent } from "./patient-visits/patientvisit-list/patientvisit-list.component";
import { PatientvisitDetailsComponent } from "./patient-visits/patientvisit-details/patientvisit-details.component";
import { AddPatientvisitComponent } from "./patient-visits/add-patientvisit/add-patientvisit.component";

const routes: Routes = [
  {
    path: "",
    component: DoctorComponent,
    children: [
      {
        path: "patients/list",
        component: PatientListComponent,
        pathMatch: "full"
      },
      {
        path: "patient/details/:id",
        component: PatientDetailsComponent,
        pathMatch: "full"
      },
      {
        path: "patient/visits/:id",
        component: PatientvisitListComponent,
        pathMatch: "full"
      },
      {
        path: "patient/visit/details/:id",
        component: PatientvisitDetailsComponent,
        pathMatch: "full"
      },
      {
        path: "patient/visit/add/:id",
        component: AddPatientvisitComponent,
        pathMatch: "full"
      },
      { path: "", redirectTo: "/doctor/patients/list", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule {}
