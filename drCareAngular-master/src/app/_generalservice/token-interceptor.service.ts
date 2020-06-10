import { Injectable, Injector } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { RegisterService } from "./register.service";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorService implements HttpInterceptor {
  // use injector because of a dependency error (get an inctence of register service)
  constructor(
    private injector: Injector,
    private registerService: RegisterService
  ) {}

  intercept(request, next) {
    let token = this.registerService.getToken();

    let interceptedRequest = request.clone({
      setHeaders: {
        Authorization: `${token}`
      }

    });

    return next.handle(interceptedRequest);
  }
}
