import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { SupervisorService } from "../../_services/supervisor.service";

@Component({
  selector: "app-add-patient",
  templateUrl: "./add-patient.component.html",
  styleUrls: ["./add-patient.component.scss"]
})
export class AddPatientComponent implements OnInit {
  addPatientForm: FormGroup;

  generalFormError: boolean = false;

  // Partial Type for not assining all the bsDatePicker properties
  DOBConfig: Partial<BsDatepickerConfig>;
  PCDConfig: Partial<BsDatepickerConfig>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private supervisorService: SupervisorService
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
        // useUtc: true
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

  ngOnInit() {
    this.addPatientForm = this.fb.group({
      Name: [null, Validators.required],
      NID: [null, Validators.required],
      Password: [null, Validators.required],
      DateOfBirth: [null, Validators.required],
      Gender: [null, Validators.required],
      ProfileCreationDate: [new Date(Date.now()), Validators.required]
    });
  }

  // dateForm:Date = this.addPatientForm.controls['DateOfBirth'].value;

  stringifyDate(date: Date): string {
    let oldDate: Date = date;
    let stringifiedDate: string = oldDate.toString();
    return stringifiedDate;
  }

  addPatient() {
    // console.log(this.addPatientForm.controls.DateOfBirth);

    if (this.addPatientForm.valid) {
      this.generalFormError = false;

      let stringifiedDOB: any = this.stringifyDate(
        this.addPatientForm.controls.DateOfBirth.value
      );
      let stringifiedPCD: any = this.stringifyDate(
        this.addPatientForm.controls.ProfileCreationDate.value
      );

      this.addPatientForm.controls.DateOfBirth.setValue(stringifiedDOB);
      this.addPatientForm.controls.ProfileCreationDate.setValue(stringifiedPCD);

      // console.log("after stringify",this.addPatientForm.controls.DateOfBirth.value);

      this.supervisorService.addPatient(this.addPatientForm.value).subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/supervisor/list"]);
        },
        error => console.log(error)
      );
    } else {
      this.generalFormError = true;
    }
  }
}
