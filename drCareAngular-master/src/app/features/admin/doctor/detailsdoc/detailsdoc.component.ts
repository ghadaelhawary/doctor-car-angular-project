import { Component, OnInit } from "@angular/core";
import { Doctor } from "src/app/_Models/doctor/doctor";
import { ActivatedRoute } from "@angular/router";
import { DoctorserService } from "src/app/_Services/doctor/doctorser.service";

@Component({
  selector: "app-detailsdoc",
  templateUrl: "./detailsdoc.component.html",
  styleUrls: ["./detailsdoc.component.scss"]
})
export class DetailsdocComponent implements OnInit {
  doctor = new Doctor(null, null, null, null, null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private docservice: DoctorserService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      // let paramsToNumber = Number(params.NID);
      this.docservice.getDoctordetails(params.NID).subscribe(doctor => {
        this.doctor = doctor.data;
      });
    });
  }
}
