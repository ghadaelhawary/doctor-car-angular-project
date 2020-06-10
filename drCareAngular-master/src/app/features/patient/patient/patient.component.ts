import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/_generalservice/config.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {


  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.flag = 0;
  }

  ngOnDestroy(){
    this.configService.flag = 1;
  }

}
