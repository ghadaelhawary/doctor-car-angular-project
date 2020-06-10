import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CliniclistComponent } from "./clinic/cliniclist/cliniclist.component";
import { AddclinicComponent } from "./clinic/addclinic/addclinic.component";
import { EditclinicComponent } from "./clinic/editclinic/editclinic.component";
import { DetailsclinicComponent } from "./clinic/detailsclinic/detailsclinic.component";
import { DoctorlistComponent } from "./doctor/doctorlist/doctorlist.component";
import { AdddoctorComponent } from "./doctor/adddoctor/adddoctor.component";
import { EditdoctorComponent } from "./doctor/editdoctor/editdoctor.component";
import { DetailsdocComponent } from "./doctor/detailsdoc/detailsdoc.component";
import { SupervisorlistComponent } from "./supervisor/supervisorlist/supervisorlist.component";
import { AddsupervisorComponent } from "./supervisor/addsupervisor/addsupervisor.component";
import { EditsupervisorComponent } from "./supervisor/editsupervisor/editsupervisor.component";
import { DetailssuperComponent } from "./supervisor/detailssuper/detailssuper.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: CliniclistComponent },
      { path: "clinic/add", component: AddclinicComponent },
      { path: "clinic/edit/:_id", component: EditclinicComponent },
      { path: "clinic/details/:id", component: DetailsclinicComponent },

      //  {path:"doctor",component:DoctorlistComponent},
      { path: "clinic/doctor/add/:param", component: AdddoctorComponent },
      { path: "doctor/edit/:NID", component: EditdoctorComponent },
      { path: "doctor/details/:NID", component: DetailsdocComponent },

      //  {path:"supervisor",component:SupervisorlistComponent},
      {
        path: "clinic/supervisor/add/:param",
        component: AddsupervisorComponent
      },
      { path: "supervisor/edit/:NID", component: EditsupervisorComponent },
      { path: "supervisor/details/:NID", component: DetailssuperComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
