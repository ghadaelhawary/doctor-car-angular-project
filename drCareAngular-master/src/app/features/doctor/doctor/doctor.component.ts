import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/_generalservice/config.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(private configService:ConfigService) { }

  ngOnInit() {
    this.configService.flag=0;
  }

  ngAfterViewChecked(): void {
  }

  ngOnDestroy() {
    this.configService.flag = 1;
  }

}
