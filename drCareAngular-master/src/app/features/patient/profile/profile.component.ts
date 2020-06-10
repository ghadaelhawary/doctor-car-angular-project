import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../_services/patient.service';
import { Patientvisits } from '../../_models/patientvisits';
import { Patient } from '../../_models/patient';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  patientBasicInfo:Patient;
  patientDiagnosis:Patientvisits[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getPatientBasicInfo().subscribe(data => {
      this.patientBasicInfo = data.data[0];
      // console.log(data.data[0])
    })

    this.patientService.getPatientDiagnosis().subscribe(data => {
      this.patientDiagnosis = data.data;
      console.log(this.patientDiagnosis[0]);
    })
  }

}
