import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PatientListComponent } from "./patient-list/patient-list.component";
import { AddPatientComponent } from "./add-patient/add-patient.component";
import { EditPatientComponent } from "./edit-patient/edit-patient.component";
import { SupervisorComponent } from './supervisor/supervisor.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [
  {
    path: "",
    component: SupervisorComponent,
    children: [
      { path: "list", component: PatientListComponent, pathMatch: "full" },
      { path: "add", component: AddPatientComponent, pathMatch: "full" },
      { path: "edit/:NID", component: EditPatientComponent, pathMatch: "full" },
      { path: "details/:NID", component: PatientDetailsComponent, pathMatch: "full" },
      { path: "", redirectTo:"/supervisor/list",pathMatch:"full" },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule {}
