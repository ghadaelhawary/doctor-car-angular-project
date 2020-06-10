import { Component, OnInit } from "@angular/core";
import { Clinic } from "../../../../_Models/clinic/clinic";
import { ClinicserService } from "../../../../_Services/clinic/clinicser.service";
import { Router, ActivatedRoute } from "@angular/router";
import { from } from "rxjs";

@Component({
  selector: "app-addclinic",
  templateUrl: "./addclinic.component.html",
  styleUrls: ["./addclinic.component.scss"]
})
export class AddclinicComponent implements OnInit {
  newcli: Clinic = new Clinic(0, "");
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

  ngOnInit() {}
}
