import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SupervisorService } from "../../_services/supervisor.service";
import { Patient } from "../../_models/patient";

@Component({
  selector: "app-patient-details",
  templateUrl: "./patient-details.component.html",
  styleUrls: ["./patient-details.component.scss"]
})
export class PatientDetailsComponent implements OnInit {
  oldPatient = new Patient(null, null, null, null, null, null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private supervisorService: SupervisorService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      // let paramsToNumber = Number(params.NID);
      this.supervisorService
        .getPatientDetails(params.NID)
        .subscribe(patient => {
          this.oldPatient = patient.data;
          console.log(patient.data);
        });
    });
  }
}
