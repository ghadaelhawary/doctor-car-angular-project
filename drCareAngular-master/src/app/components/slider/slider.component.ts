import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/_generalservice/config.service";
import { Result } from "src/app/_Models/slider";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  sliderArray: object[];
  transform: number;
  selectedIndex = 0;

  constructor(private configService: ConfigService) {
    this.sliderArray = [];
    this.selectedIndex = 0;
    this.transform = 100;
  }

  ngOnInit() {
    this.configService.getData().subscribe((result: Result) => {
      this.sliderArray = result.sliderArray;
    });
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  downSelected(i) {
    this.transform = 100 - i * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex > 4) {
      this.selectedIndex = 0;
    }
  }
}
