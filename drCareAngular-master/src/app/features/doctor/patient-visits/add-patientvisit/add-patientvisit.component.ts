import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { PatientvisitsService } from 'src/app/features/_services/patientvisits.service';


@Component({
  selector: 'app-add-patientvisit',
  templateUrl: './add-patientvisit.component.html',
  styleUrls: ['./add-patientvisit.component.scss']
})
export class AddPatientvisitComponent implements OnInit {
  
  DiagnosisForm: FormGroup;
  Recommendations:FormArray;
  Medicines:FormArray;
  generalFormError: boolean = false;

  // Partial Type for not assining all the bsDatePicker properties
  DiagnosisDateConfig: Partial<BsDatepickerConfig>;
  RevisitDateConfig: Partial<BsDatepickerConfig>;

  constructor(private fb: FormBuilder, private router: Router, private patientVisitsService:PatientvisitsService, private activatedRoute:ActivatedRoute) {
    // Configure date picker ( Diagnosis Date )
    this.RevisitDateConfig = Object.assign({},
      {
        containerClass: "theme-dark-blue",
        isAnimated: true,
        showWeekNumbers: false,
        minDate: new Date(Date.now()),
        dateInputFormat: "DD/MM/YYYY",
        // useUtc: true
      }
    );

    // Configure date picker ( Revisit Date )
    this.DiagnosisDateConfig = Object.assign({},
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

    this.DiagnosisForm = this.fb.group({
      DiagnosisDate: [new Date(Date.now()), Validators.required],
      RevisitDate: [null, Validators.required],
      Pressure: [null, Validators.required],
      Diabetes: [null, Validators.required],
      Diagnosis: [null, Validators.required],
      Medicines: this.fb.array([ this.createMedicine() ]),
      Recommendations: this.fb.array([ this.createRecommendation() ])
    });

  }

  addRecommendation(): void {
    this.Recommendations = this.DiagnosisForm.get('Recommendations') as FormArray;
    this.Recommendations.push( this.createRecommendation() );
  }

  addMedicine(): void {
    this.Medicines = this.DiagnosisForm.get('Medicines') as FormArray;
    this.Medicines.push( this.createMedicine() );
  }

  createRecommendation(): FormGroup {
    return this.fb.group({
      RecommendationName: [null, Validators.required],
    });
  }

  createMedicine(): FormGroup {
    return this.fb.group({
      medicineName: [null, Validators.required],
      medicineHowToUse: [null, Validators.required],
      medicineForHowLong: [null, Validators.required]
    });
  }
    
  stringifyDate(date:Date):string {
    let oldDate:Date = date;
    let stringifiedDate:string = oldDate.toString();
    return stringifiedDate;
  }
  

  addDiagnosis() {
    if (this.DiagnosisForm.valid) {

      this.generalFormError = false;

      let stringifiedDiagnosisDate:any = this.stringifyDate(this.DiagnosisForm.controls.DiagnosisDate.value);
      let stringifiedRevisitDate:any = this.stringifyDate(this.DiagnosisForm.controls.RevisitDate.value);

      this.DiagnosisForm.controls.DiagnosisDate.setValue(stringifiedDiagnosisDate);
      this.DiagnosisForm.controls.RevisitDate.setValue(stringifiedRevisitDate);


      this.activatedRoute.params.subscribe(params => {
        this.patientVisitsService.addDiagnosis(params.id, this.DiagnosisForm.value).subscribe(data => {
          console.log(data);
          this.router.navigate([`doctor/patient/visits/${params.id}`]);

        }, error => {
          console.log(error)
        })
      }, error => {
        console.log(error)
      })

    } else {
      this.generalFormError = true;
    }
  }

}
