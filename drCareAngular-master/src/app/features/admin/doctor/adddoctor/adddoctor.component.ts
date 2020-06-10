import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DoctorserService } from "../../../../_Services/doctor/doctorser.service";
import { Doctor } from "../../../../_Models/doctor/doctor";
import { Router, ActivatedRoute } from "@angular/router";
import { ClinicserService } from "src/app/_Services/clinic/clinicser.service";

@Component({
  selector: "app-adddoctor",
  templateUrl: "./adddoctor.component.html",
  styleUrls: ["./adddoctor.component.scss"]
})
export class AdddoctorComponent implements OnInit {
  param: any;

  AddDoctorForm: FormGroup;
  generalFormError: boolean = false;
  // NIDexsist:number;

  constructor(
    private docser: DoctorserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private clinicser: ClinicserService
  ) {}

  Doctorinfo: Doctor = new Doctor(null, null, null, null, null);
  //  newdoc :Doctor = new Doctor (0,"","","","")

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
      this.param = param.param;
    });

    this.AddDoctorForm = this.fb.group({
      Name: [this.Doctorinfo.Name, Validators.required],
      NID: [this.Doctorinfo.NID, Validators.required],
      Password: [this.Doctorinfo.Password, Validators.required],
      Department: [this.Doctorinfo.Department, Validators.required]
      // Clinic:[this.Doctorinfo.Clinic,Validators.required]
    });
  }

  AddDoctor() {
    if (this.AddDoctorForm.valid) {
      this.generalFormError = false;

      this.docser
        .AddDoctor(this.param, this.AddDoctorForm.value)
        .subscribe(data => {
          if (data.status == -2) {
            alert(
              "Sorry ! This National ID Exists , Please Check Your National ID "
            );
          } else {
            this.router.navigate(["admin"]);
          }
        });
    } else {
      this.generalFormError = true;
    }
  }
}
