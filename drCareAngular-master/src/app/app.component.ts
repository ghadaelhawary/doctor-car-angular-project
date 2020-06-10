import { Component, ChangeDetectorRef } from "@angular/core";
import { ConfigService } from "./_generalservice/config.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "drcareAngular";

  show = 1;

  constructor(
    public configService: ConfigService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewChecked(): void {
    let show = this.configService.flag;

    // check if flag changes , tell change detector to update view
    if (show != this.show) {
      this.show = show;
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit() {
    this.show = this.configService.flag;
  }
}
