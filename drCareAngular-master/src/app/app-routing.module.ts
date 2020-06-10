import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
// import { ContactComponent } from "./components/contact/contact.component";
// import { ContactComponent } from "./components/contact/contact.component";
import { DepartmentComponent } from "./components/department/department.component";
import { AboutComponent } from "./components/about/about.component";
import { LoginComponent } from "./components/login/login.component";
import { ErrorComponent } from "./components/error/error.component";
import { AuthguardService } from './_generalservice/authguard.service';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
// import { DefaultLayoutComponent } from "./components/default-layout/default-layout.component";

const routes: Routes = [

  { path: "", redirectTo: '/home' , pathMatch: "full"},
  { path: "home", component: HomeComponent, pathMatch: "full" },
  // { path: "contact", component: ContactComponent, pathMatch: "full" },
  { path: "department", component: DepartmentComponent, pathMatch: "full" },
  { path: "about", component: AboutComponent, pathMatch: "full" },
  { path: "forbidden", component: ForbiddenComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  {
    path: "patient",
    loadChildren: () =>
      import("./features/patient/patient.module").then(m => m.PatientModule),
    canActivate: [AuthguardService], data: { roles: "4" }
  },
  {
    path: "supervisor",
    loadChildren: () =>
      import("./features/supervisor/supervisor.module").then(m => m.SupervisorModule),
    canActivate: [AuthguardService], data: { roles: "3" }
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./features/admin/admin.module").then(m => m.AdminModule),
      canActivate: [AuthguardService], data: { roles: "1" }
  },
  {
    path:"doctor",
    loadChildren:()=>
    import("./features/doctor/doctor.module").then(m=> m.DoctorModule),
    canActivate:[AuthguardService], data: { roles: "2" }
  },

  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
