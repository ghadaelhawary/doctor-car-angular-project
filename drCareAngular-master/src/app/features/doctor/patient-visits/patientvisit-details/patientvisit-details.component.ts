import { Component, OnInit } from "@angular/core";
import { PatientvisitsService } from "src/app/features/_services/patientvisits.service";
import { ActivatedRoute } from "@angular/router";
import { Patientvisits } from "src/app/features/_models/patientvisits";
import { Patient } from 'src/app/features/_models/patient';

@Component({
  selector: "app-patientvisit-details",
  templateUrl: "./patientvisit-details.component.html",
  styleUrls: ["./patientvisit-details.component.scss"]
})
export class PatientvisitDetailsComponent implements OnInit {
  // visit:Patientvisits=new Patientvisits(null,null,null,null,null,null,null,null,null)

  visit: Patientvisits;
  // PatientBasicInfo: Patient;

  constructor(
    private visitService: PatientvisitsService,
    private aroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.aroute.params.subscribe(params => {
      console.log(params);
      this.visitService.getvisitDetails(params.id).subscribe(visit => {
        console.log(visit.visit);
        this.visit = visit.visit;
        // this.PatientBasicInfo = visit.visit.Patient;
      });
    });
  }

}
