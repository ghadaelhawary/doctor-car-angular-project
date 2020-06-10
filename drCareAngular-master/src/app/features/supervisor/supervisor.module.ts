import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisorRoutingModule } from './supervisor-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Authentication
// import { RegisterService } from '../../_generalservice/register.service';
// import { AuthguardService } from '../../_generalservice/authguard.service';
// import { TokenInterceptorService } from '../../_generalservice/token-interceptor.service';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PatientFilterPipe } from './patients-filter.pipe';


import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { SharedmoduleModule } from '../_sharedmodule/sharedmodule.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AddPatientComponent,
    PatientListComponent,
    EditPatientComponent, 
    SupervisorComponent, 
    PatientDetailsComponent,
    PatientFilterPipe,
    NavComponent

  ],
  imports: [
    CommonModule,
    SupervisorRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedmoduleModule,
    // BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  // providers: [RegisterService, AuthguardService,{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: TokenInterceptorService,
  //   multi: true // use multiple interceptors if required
  // }],
})
export class SupervisorModule { }
