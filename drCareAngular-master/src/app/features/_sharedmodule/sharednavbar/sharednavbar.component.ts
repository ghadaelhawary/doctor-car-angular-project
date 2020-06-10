import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/_generalservice/config.service';

@Component({
  selector: 'app-sharednavbar',
  templateUrl: './sharednavbar.component.html',
  styleUrls: ['./sharednavbar.component.scss']
})
export class SharednavbarComponent implements OnInit {

  // navbarLinks: Object[] = [];


  constructor(private router: Router, private configService:ConfigService) {

    // this.navbarLinks.push(
    //   { classes: 'nav-link py-4', routerLink: ['/supervisor/list'], text: 'Patients List' },
    //   { classes: 'nav-link py-4', routerLink: ['/supervisor/add'], text: 'Add Patient' },
    //   { classes: 'nav-link py-4', routerLink: ['/supervisor/edit:id'], text: 'Edit Patient' },
    // );
    
  }

  ngOnInit() {}

  logout(){
    // remove the token from local storage
    localStorage.removeItem('token');

    // navigate to home page
    this.router.navigate(['/home']);
  }

}
