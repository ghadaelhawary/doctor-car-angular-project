import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterService } from "src/app/_generalservice/register.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  // Form Builder class is provided as a service "you have to inject it in constructor to use it"
  // has 3 methods group-control-array

  loginForm: FormGroup;

  ErrorMsg: String = "";
  ErrorFlag: Boolean = false;

  generalFormError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      Role: ["", Validators.required],
      NID: ["", Validators.compose([Validators.required])],
      Password: ["", Validators.required]
    });
  }

  submit() {
    // console.log(this.loginForm.value)
    // Sign a token to the user depending on his role
    if (this.loginForm.valid) {
      this.generalFormError = false;

      this.registerService.login(this.loginForm.value).subscribe(
        data => {
          console.log(data);

          if (data.token) {
            // let StringedToken = (data.token).toString();
            localStorage.setItem("token", data.token.toString());

            if (this.loginForm.value.Role === "1") {
              this.router.navigate(["admin"]);
            } else if (this.loginForm.value.Role === "2") {
              this.router.navigate(["doctor"]);
            } else if (this.loginForm.value.Role === "3") {
              this.router.navigate(["supervisor"]);
            } else if (this.loginForm.value.Role === "4") {
              this.router.navigate(["patient/profile"]);
            }
          } else {
            this.ErrorFlag = true;
            this.ErrorMsg = "Invalid Login Credientials";
          }
        },
        error => {
          this.ErrorFlag = true;
          this.ErrorMsg = error;
        }
      );
    } else {
      this.generalFormError = true;
    }
  }
}
