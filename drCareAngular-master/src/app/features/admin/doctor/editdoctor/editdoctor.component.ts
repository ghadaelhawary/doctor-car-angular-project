import { Component, OnInit } from "@angular/core";
import { Doctor } from "../../../../_Models/doctor/doctor";
import { DoctorserService } from "../../../../_Services/doctor/doctorser.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-editdoctor",
  templateUrl: "./editdoctor.component.html",
  styleUrls: ["./editdoctor.component.scss"]
})
export class EditdoctorComponent implements OnInit {
  editDoctorForm: FormGroup;
  generalFormError: boolean = false;

  constructor(
    private docser: DoctorserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  Doctorinfo: Doctor = new Doctor(null, null, null, null, null);

  ngOnInit() {
    // Load Patient Data here first
    this.activatedRoute.params.subscribe(params => {
      // console.log(params);
      this.docser.getDoctordetails(params.NID).subscribe(doctor => {
        this.Doctorinfo = doctor.data;
        // let NID =
        // let Name = doctor.data.Name;
        // let Password = doctor.data.Password;
        // let Department = doctor.data.Department;
        // let Name = doctor.data.Name;
        // console.log(NID,Name,Password ,Department)
      });
    });

    this.editDoctorForm = this.fb.group({
      Name: [this.Doctorinfo.Name, Validators.required],
      NID: [this.Doctorinfo.NID, Validators.required],
      Password: [this.Doctorinfo.Password, Validators.required],
      Department: [this.Doctorinfo.Department, Validators.required],
      // Clinic: [this.Doctorinfo.Clinic, Validators.required]
    });

    // console.log(typeof this.editDoctorForm.controls.DateOfBirth.value);
  } // end of ng-oniniit

  editDoctor() {
    if (this.editDoctorForm.valid) {
      this.generalFormError = false;
      // Display Success Message then navigate to list

      // this.editDoctorForm.controls.DateOfBirth.setValue(stringifiedDOB);
      // this.editDoctorForm.controls.ProfileCreationDate.setValue(stringifiedPCD);

      // call the add patient method on supervisor service

      this.docser.updateDoctor(this.editDoctorForm.value).subscribe(data => {});

      // console.log(this.editDoctorForm.value);
      this.router.navigate(["admin"]);
    } else {
      this.generalFormError = true;
    }
  }
}
