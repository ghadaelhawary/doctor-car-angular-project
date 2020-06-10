import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RegisterService } from "./register.service";

@Injectable({
  providedIn: "root"
})
export class AuthguardService implements CanActivate {
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.registerService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      this.registerService.logout();
      return false
    } 
    else if (this.registerService.getRole() !== null ) {
      let routingRole = next.data["roles"];
      if (routingRole === this.registerService.getRole()) {
        return true;
      } else {
        this.router.navigateByUrl('/forbidden');
        return false
      };
    }
  }
}


// Add data => roles in canActivate Router guard in Routing

// Get the Role in the Auth Guard and return true if found the matched Role

