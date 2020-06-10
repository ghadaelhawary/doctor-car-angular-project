import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
// import { Routes, RouterModule } from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminRoutingModule } from "./admin-routing.module";

import { MainComponent } from "./main/main.component";
import { AddclinicComponent } from "./clinic/addclinic/addclinic.component";
import { EditclinicComponent } from "./clinic/editclinic/editclinic.component";
import { CliniclistComponent } from "./clinic/cliniclist/cliniclist.component";
import { AdddoctorComponent } from "./doctor/adddoctor/adddoctor.component";
import { EditdoctorComponent } from "./doctor/editdoctor/editdoctor.component";
import { DoctorlistComponent } from "./doctor/doctorlist/doctorlist.component";
import { AddsupervisorComponent } from "./supervisor/addsupervisor/addsupervisor.component";
import { EditsupervisorComponent } from "./supervisor/editsupervisor/editsupervisor.component";
import { SupervisorlistComponent } from "./supervisor/supervisorlist/supervisorlist.component";
import { DetailssuperComponent } from "./supervisor/detailssuper/detailssuper.component";
import { DetailsdocComponent } from "./doctor/detailsdoc/detailsdoc.component";
import { DetailsclinicComponent } from "./clinic/detailsclinic/detailsclinic.component";

//import{NameFilterPipe} from './filter/name-filter.pipe';
// import { AppModule } from 'src/app/app.module';
import { NameFilterPipe } from "./filter/name-filter.pipe";

// import { PaginationModule } from 'ngx-bootstrap/pagination';

// import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  // declarations: [CliniclistComponent, ClinicComponent],
  declarations: [
    NameFilterPipe,
    AddclinicComponent,
    EditclinicComponent,
    CliniclistComponent,
    AdddoctorComponent,
    EditdoctorComponent,
    DoctorlistComponent,
    AddsupervisorComponent,
    EditsupervisorComponent,
    SupervisorlistComponent,
    DetailssuperComponent,
    DetailsdocComponent,
    DetailsclinicComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    // FormGroup,
    // FormBuilder,
    // Validators,
    ReactiveFormsModule,
    NgbModule
    // AppModule,
    // NgbPaginationModule
    //NameFilterPipe
    // RouterModule.forRoot([])
  ]
})
export class AdminModule {}
