import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/_generalservice/config.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.flag = 0;
  }

  ngAfterViewChecked(): void {
    // this.configService.flag = 0;
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
  }

  ngOnDestroy() {
    this.configService.flag = 1;
  }

}
