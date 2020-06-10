import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../_services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../_models/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patient = new Patient(null, null, null, null, null, null);

  constructor(private doctorService:DoctorService,
              private aRoute:ActivatedRoute) { }

  ngOnInit() {
    this.aRoute.params.subscribe(params=> {
      this.doctorService.getPatientDetails(params.id).subscribe(patient=>{
        this.patient = patient.data;
        console.log(patient.data)
      })
    });
   
  }

}
