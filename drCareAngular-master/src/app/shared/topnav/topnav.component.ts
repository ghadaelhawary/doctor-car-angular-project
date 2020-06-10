import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topnav",
  templateUrl: "./topnav.component.html",
  styleUrls: ["./topnav.component.scss"]
})
export class TopnavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // hide top navbar if user in dashboard
  // outSide: boolean = true;
}
