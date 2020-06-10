import { Component, OnInit } from "@angular/core";
import { PatientvisitsService } from "src/app/features/_services/patientvisits.service";
import { Patientvisits } from "src/app/features/_models/patientvisits";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-patientvisit-list",
  templateUrl: "./patientvisit-list.component.html",
  styleUrls: ["./patientvisit-list.component.scss"]
})
export class PatientvisitListComponent implements OnInit {
  allVisits: Patientvisits[] = [];

  constructor(
    private patientService: PatientvisitsService,
    private aroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.aroute.params.subscribe(params => {
      console.log(params);
      this.patientService.getAllVisits(params.id).subscribe(data => {
        this.allVisits = data.visits;
        console.log(this.allVisits);
      });
    });
  }

  
  addDiagnosis(){
    this.aroute.params.subscribe(params => {
      this.router.navigate([`doctor/patient/visit/add/${params.id}`])
    })
  }
}
