import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SuperserService } from "src/app/_Services/supervisor/superser.service";
import { Supervisor } from "src/app/_Models/supervisor/supervisor";

@Component({
  selector: "app-detailssuper",
  templateUrl: "./detailssuper.component.html",
  styleUrls: ["./detailssuper.component.scss"]
})
export class DetailssuperComponent implements OnInit {
  supervisor = new Supervisor(null, null, null, null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private superserservice: SuperserService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      // let paramsToNumber = Number(params.NID);
      this.superserservice
        .getSupervisordetails(params.NID)
        .subscribe(supervisor => {
          this.supervisor = supervisor.data;
        });
    });
  }
}
