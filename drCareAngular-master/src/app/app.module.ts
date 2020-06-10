import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Authentication
import { RegisterService } from "./_generalservice/register.service";
import { AuthguardService } from "./_generalservice/authguard.service";
import { TokenInterceptorService } from "./_generalservice/token-interceptor.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { PatientModule } from './features/patient/patient.module';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DepartmentComponent } from "./components/department/department.component";
import { LoginComponent } from "./components/login/login.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { ErrorComponent } from "./components/error/error.component";
import { TopnavComponent } from "./shared/topnav/topnav.component";
import { SliderComponent } from "./components/slider/slider.component";
import { ForbiddenComponent } from "./components/forbidden/forbidden.component";
// import { AddClinicComponent } from './features/cliniclist/add-clinic/add-clinic.component';
// import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';

//  //pipe
//  import{NameFilterPipe} from './features/admin/filter/name-filter.pipe';
// import { from } from 'rxjs';

//ng bootstrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DepartmentComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    ErrorComponent,
    TopnavComponent,
    SliderComponent,
    ForbiddenComponent

    // AddClinicComponent,
    // DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PatientModule,
    // BrowserAnimationsModule
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    NgbModule
    // BsDatepickerModule.forRoot(),
  ],
  entryComponents: [SliderComponent], // BsDatepickerModule.forRoot(),],
  providers: [
    RegisterService,
    AuthguardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true // use multiple interceptors if required
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
