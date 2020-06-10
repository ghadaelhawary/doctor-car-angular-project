import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Supervisor } from "src/app/_Models/supervisor/supervisor";
import { SuperserService } from "src/app/_Services/supervisor/superser.service";

@Component({
  selector: "app-editsupervisor",
  templateUrl: "./editsupervisor.component.html",
  styleUrls: ["./editsupervisor.component.scss"]
})
export class EditsupervisorComponent implements OnInit {
  editsupervisorForm: FormGroup;
  generalFormError: boolean = false;

  constructor(
    private supser: SuperserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  Supervisorinfo: Supervisor = new Supervisor(null, null, null, null);

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.supser.getSupervisordetails(params.NID).subscribe(supevisor => {
        this.Supervisorinfo = supevisor.data;
      });
    });

    this.editsupervisorForm = this.fb.group({
      Name: [this.Supervisorinfo.Name, Validators.required],
      NID: [this.Supervisorinfo.NID, Validators.required],
      Password: [this.Supervisorinfo.Password, Validators.required],
      Clinic: [this.Supervisorinfo.Clinic, Validators.required]
    });
  }

  editSupervisor() {
    if (this.editsupervisorForm.valid) {
      this.generalFormError = false;

      this.supser
        .updateSuper(this.editsupervisorForm.value)
        .subscribe(data => {});

      this.router.navigate(["admin"]);
    } else {
      this.generalFormError = true;
    }
  }
}
