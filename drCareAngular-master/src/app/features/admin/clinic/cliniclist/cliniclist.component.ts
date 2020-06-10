import { Component, OnInit, OnDestroy } from "@angular/core";

import { Clinic } from "../../../../_Models/clinic/clinic";
import { ClinicserService } from "src/app/_Services/clinic/clinicser.service";

import { Router, ActivatedRoute } from "@angular/router";
import { Reference } from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: "app-cliniclist",
  templateUrl: "./cliniclist.component.html",
  styleUrls: ["./cliniclist.component.scss"]
})
export class CliniclistComponent implements OnInit, OnDestroy {
  clinics: Clinic[];
  nameSerch: string;

  //adding new clinic
  newcli: Clinic = new Clinic(0, "");

  deleteOne(_id: number) {
    this.clinicser.deleteClinic(_id).subscribe(data => {
      for (let i = 0; i < this.clinics.length; i++) {
        if (this.clinics[i]._id == _id) {
          this.clinics.splice(i, 1);
          this.router.navigate(["admin"]);
        }
      }
    });
  }

  constructor(
    private clinicser: ClinicserService,
    private router: Router,
    private aroute: ActivatedRoute
  ) {}

  onSave() {
    this.clinicser.AddClinic(this.newcli).subscribe(a => {
      this.router.navigate(["admin"]);
    });
  }

  toggoleSideBar() {}

  ngOnDestroy() {}

  ngOnInit() {
    this.clinicser.getClinic().subscribe(d => {
      // console.log(d);
      this.clinics = d.data;
    });
  }
} //end of the class
