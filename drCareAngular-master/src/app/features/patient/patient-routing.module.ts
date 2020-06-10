import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {
    path: "",
    component: PatientComponent,
    children: [
      { path: "profile", component: ProfileComponent },
      { path: "", redirectTo:"/patient/profile", pathMatch:"full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
