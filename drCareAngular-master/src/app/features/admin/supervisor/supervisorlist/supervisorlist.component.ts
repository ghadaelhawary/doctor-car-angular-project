import { Component, OnInit } from "@angular/core";
import { Supervisor } from "../../../../_Models/supervisor/supervisor";
import { SuperserService } from "../../../../_Services/supervisor/superser.service";

import { Router, ActivatedRoute } from "@angular/router";
import { ClinicserService } from "src/app/_Services/clinic/clinicser.service";

@Component({
  selector: "app-supervisorlist",
  templateUrl: "./supervisorlist.component.html",
  styleUrls: ["./supervisorlist.component.scss"]
})
export class SupervisorlistComponent implements OnInit {
  param: string;
  x: string = "s";

  supers: Supervisor[];

  deleteOne(NID: number) {
    this.superser.deletesuper(NID).subscribe(data => {
      for (let i = 0; i < this.supers.length; i++) {
        if (this.supers[i].NID == NID) {
          this.supers.splice(i, 1);
          // this.router.navigate(['admin'])
        }
      }
    });
  }

  constructor(
    private superser: SuperserService,
    private router: Router,
    private aroute: ActivatedRoute,
    private clinicservice: ClinicserService
  ) {}

  ngOnInit() {
    this.aroute.params.subscribe(data => {
      this.param = data.id;
      this.clinicservice
        .getClinicdetails(this.x, data.id)
        .subscribe(supervisor => {
          this.supers = supervisor;
        });
    });
  }
}
