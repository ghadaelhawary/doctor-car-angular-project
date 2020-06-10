import { Component, OnInit, ViewChild } from "@angular/core";
import { Clinic } from "../../../../_Models/clinic/clinic";
import { ClinicserService } from "../../../../_Services/clinic/clinicser.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-editclinic",
  templateUrl: "./editclinic.component.html",
  styleUrls: ["./editclinic.component.scss"]
})
export class EditclinicComponent implements OnInit {
  // clinics:Clinic[]=[];
  oldClinic: Clinic = new Clinic(0, "");

  constructor(
    private clinicser: ClinicserService,
    private router: Router,
    private aroute: ActivatedRoute
  ) {}

  update() {
    this.clinicser.updateClinic(this.oldClinic).subscribe(newval => {
      console.log(newval);
      this.router.navigate(["admin"]);
    });
  }

  ngOnInit() {
    this.aroute.params.subscribe(a => {
      console.log(a);
      this.clinicser.getClinicInfo(a._id).subscribe(d => {
        console.log(d);
        this.oldClinic = d.data;
      });
    });
  }
}
