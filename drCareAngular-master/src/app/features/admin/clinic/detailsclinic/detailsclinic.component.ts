import { Component, OnInit } from "@angular/core";
import { Doctor } from "../../../../_Models/doctor/doctor";
import { Supervisor } from "../../../../_Models/supervisor/supervisor";
import { DoctorserService } from "../../../../_Services/doctor/doctorser.service";
import { SuperserService } from "../../../../_Services/supervisor/superser.service";
import { Clinic } from "../../../../_Models/clinic/clinic";
import { ClinicserService } from "../../../../_Services/clinic/clinicser.service";
import { Router, ActivatedRoute } from "@angular/router";
import { from } from "rxjs";
import { SupervisorService } from "src/app/features/_services/supervisor.service";

@Component({
  selector: "app-detailsclinic",
  templateUrl: "./detailsclinic.component.html",
  styleUrls: ["./detailsclinic.component.scss"]
})
export class DetailsclinicComponent implements OnInit {
  Value = "";
  doctorIsActive: boolean = true;
  supervisorIsActive: boolean = false;

  ActivateDoctor() {
    this.doctorIsActive = true;
    this.supervisorIsActive = false;
  }

  ActivateSupervisor() {
    this.supervisorIsActive = true;
    this.doctorIsActive = false;
  }

  constructor(
    private aroute: ActivatedRoute,
    private clinicser: ClinicserService
  ) {}
  ngOnInit() {}
}
