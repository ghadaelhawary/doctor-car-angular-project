import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  logout(){
    // remove the token from local storage
    localStorage.removeItem('token');

    // navigate to home page
    this.router.navigate(['/home']);
  }

}
