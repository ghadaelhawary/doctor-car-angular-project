import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private http: HttpClient, private router: Router) {}

  commonUrl: string = `${environment.baseUrl}/login`;


  login(jsonObj): Observable<{ status: boolean; token: string }> {
    return this.http.post<{ status: boolean; token: string }>(
      this.commonUrl,
      jsonObj
    );
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getUserPayLoad() {
    let token = localStorage.getItem("token");
    if (token) {
      let decoddedToken = atob(token.split(".")[1]);
      // console.log(decoddedToken);
      return JSON.parse(decoddedToken);
    } else {
      return null;
    }
  }

  isLoggedIn(){
    let userPayLoad = this.getUserPayLoad();
    if(userPayLoad){
      // console.log(this.getRole());

      return userPayLoad.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  getRole(): string {
    let userPayLoad = this.getUserPayLoad();
    let role = userPayLoad.role;
    // console.log(role);
    return role;
  }

  // !! Doublenigate to return a boolean value
  getToken() {
    return localStorage.getItem("token");
  }
}
