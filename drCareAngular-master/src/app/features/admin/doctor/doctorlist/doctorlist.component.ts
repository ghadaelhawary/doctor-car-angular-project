import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Doctor } from "../../../../_Models/doctor/doctor";
import { DoctorserService } from "src/app/_Services/doctor/doctorser.service";
import { ClinicserService } from "src/app/_Services/clinic/clinicser.service";

@Component({
  selector: "app-doctorlist",
  templateUrl: "./doctorlist.component.html",
  styleUrls: ["./doctorlist.component.scss"]
})
export class DoctorlistComponent implements OnInit {
  //modal
  closeResult: string;

  specDoc: Doctor[] = [];
  page = 4;
  x: string = "d";

  param: string;

  constructor(
    private docser: DoctorserService,
    private router: Router,
    private aroute: ActivatedRoute,
    private clinicservice: ClinicserService
  ) {}

  deleteOne(NID: number) {
    this.docser.deleteDoctor(NID).subscribe(data => {
      for (let i = 0; i < this.specDoc.length; i++) {
        if (this.specDoc[i].NID == NID) {
          this.specDoc.splice(i, 1);
          // this.router.navigate(['admin/clinic/details/:{{this.param}}'])
        }
      }
    });
  }
  ngOnInit() {
    this.aroute.params.subscribe(data => {
      console.log(data);
      this.param = data.id;
      this.clinicservice.getClinicdetails(this.x, data.id).subscribe(doc => {
        console.log(doc);
        this.specDoc = doc;
      });
    });

    // this.docser.getAllDoctor().subscribe(d=>{
    //   this.doctors=d.data;

    // // console.log(data.get("Name"))  ;

    // })
  }
}
