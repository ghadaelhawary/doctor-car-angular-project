import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SuperserService } from "src/app/_Services/supervisor/superser.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Supervisor } from "src/app/_Models/supervisor/supervisor";

@Component({
  selector: "app-addsupervisor",
  templateUrl: "./addsupervisor.component.html",
  styleUrls: ["./addsupervisor.component.scss"]
})
export class AddsupervisorComponent implements OnInit {
  param: any;

  AddSupervisorForm: FormGroup;
  generalFormError: boolean = false;

  constructor(
    private supervisorser: SuperserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  SupervisorInfo: Supervisor = new Supervisor(null, null, null, null);

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      console.log(param);
      this.param = param.param;
    });

    this.AddSupervisorForm = this.fb.group({
      Name: [this.SupervisorInfo.Name, Validators.required],
      NID: [this.SupervisorInfo.NID, Validators.required],
      Password: [this.SupervisorInfo.Password, Validators.required]
      // Clinic:[this.SupervisorInfo.Clinic,Validators.required]
    });
  }

  AddSupervisor() {
    if (this.AddSupervisorForm.valid) {
      this.generalFormError = false;

      this.supervisorser
        .AddSuper(this.param, this.AddSupervisorForm.value)
        .subscribe(data => {
          if (data.status == -2) {
            alert(
              "Sorry ! This National ID Exists , Please Check Your National ID "
            );
          } else {
            this.router.navigate(["admin"]);
          }
        });
    } else {
      this.generalFormError = true;
    }
  }
}
