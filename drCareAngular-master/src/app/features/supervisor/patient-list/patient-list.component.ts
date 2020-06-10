import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SupervisorService } from "../../_services/supervisor.service";
import { Patient } from "../../_models/patient";

@Component({
  selector: "app-patient-list",
  templateUrl: "./patient-list.component.html",
  styleUrls: ["./patient-list.component.scss"]
})
export class PatientListComponent implements OnInit {
  allPatients: Patient[] = [];

  searchInput: string;

  constructor(private supervisorService: SupervisorService) {}

  ngOnInit() {
    this.supervisorService.getAllPatients().subscribe(
      data => {
        console.log(data);
        this.allPatients = data.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deletePatient(id: number) {
    this.supervisorService.deletePatient(id).subscribe(
      data => {
        console.log(data);
        this.supervisorService.getAllPatients().subscribe(data => {
          this.allPatients = data.data;
        });
      },
      error => {
        console.log(error);
      }
    );
  }
}
