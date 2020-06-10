import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { SupervisorService } from "../../_services/supervisor.service";
import { Patient } from "../../_models/patient";

@Component({
  selector: "app-edit-patient",
  templateUrl: "./edit-patient.component.html",
  styleUrls: ["./edit-patient.component.scss"]
})
export class EditPatientComponent implements OnInit {
  editPatientForm: FormGroup;

  generalFormError: boolean = false;

  // Partial Type for not assining all the bsDatePicker properties
  DOBConfig: Partial<BsDatepickerConfig>;
  PCDConfig: Partial<BsDatepickerConfig>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private supervisorService: SupervisorService,
    private activatedRoute: ActivatedRoute
  ) {
    // Configure date picker (Date of Birth)
    this.DOBConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        isAnimated: true,
        showWeekNumbers: false,
        maxDate: new Date(Date.now()),
        dateInputFormat: "DD/MM/YYYY"
      }
    );

    // Configure date picker (Profile Creation Date)
    this.PCDConfig = Object.assign(
      {},
      {
        containerClass: "theme-dark-blue",
        isAnimated: true,
        isDisabled: true,
        showWeekNumbers: false,
        dateInputFormat: "DD/MM/YYYY"
        // value: new Date(Date.now()),
      }
    );
  }

  patientInfo: Patient = new Patient(null, null, null, null, null, null);

  unstringifyDate(stringDate: string): Date {
    var value = new Date(stringDate + "Z");
    return value;
  }

  ngOnInit() {
    // Load Patient Data here first

    this.activatedRoute.params.subscribe(params => {
      this.supervisorService
        .getPatientDetails(params.NID)
        .subscribe(patient => {
          let realDOB: any = this.unstringifyDate(patient.data.DateOfBirth);
          let realPCD: any = this.unstringifyDate(
            patient.data.ProfileCreationDate
          );

          // console.log(realDOB);
          // console.log(typeof realDOB);

          patient.data.DateOfBirth = realDOB;
          patient.data.ProfileCreationDate = realPCD;

          this.patientInfo = patient.data;
          // console.log(this.patientInfo);
        });
    });

    this.editPatientForm = this.fb.group({
      Name: [this.patientInfo.Name, Validators.required],
      NID: [this.patientInfo.NID, Validators.required],
      Password: [this.patientInfo.Password, Validators.required],
      DateOfBirth: [this.patientInfo.DateOfBirth, Validators.required],
      Gender: [this.patientInfo.Gender, Validators.required],
      ProfileCreationDate: [
        this.patientInfo.ProfileCreationDate,
        Validators.required
      ]
    });

    // console.log(typeof this.editPatientForm.controls.DateOfBirth.value);
  }

  stringifyDate(date: Date): string {
    let oldDate: Date = date;
    let stringifiedDate: string = oldDate.toString();
    return stringifiedDate;
  }

  editPatient() {
    if (this.editPatientForm.valid) {
      this.generalFormError = false;
      // Display Success Message then navigate to list

      let stringifiedDOB: any = this.stringifyDate(
        this.editPatientForm.controls.DateOfBirth.value
      );
      // let stringifiedPCD:any = this.stringifyDate(this.editPatientForm.controls.ProfileCreationDate.value);

      this.editPatientForm.controls.DateOfBirth.setValue(stringifiedDOB);
      // this.editPatientForm.controls.ProfileCreationDate.setValue(stringifiedPCD);

      // call the add patient method on supervisor service
      this.supervisorService
        .updatePatient(this.editPatientForm.value)
        .subscribe(data => {
          console.log(data);
        });

      // console.log(this.editPatientForm.value);
      this.router.navigate(["/supervisor/list"]);
    } else {
      this.generalFormError = true;
    }
  }
}
