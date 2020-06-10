import { Component, OnInit } from '@angular/core';
import { Patient } from '../../_models/patient';
import { DoctorService } from '../../_services/doctor.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  allPatient:Patient[]=[];

  constructor(private doctorService:DoctorService) { }

  ngOnInit() {
    this.doctorService.getAllPatients().subscribe((data)=>{
      console.log(data)
      this.allPatient=data.data
      console.log(this.allPatient)
    },error=>{
      console.log(error);
      
    }
    
    )
  }

}
