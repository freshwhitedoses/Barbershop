import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private userService :UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.userService.isAuthenticated()){
      req = req.clone({
        setHeaders:{
          Authorization: this.userService.getToken()
        }
      })
    }
    return next.handle(req);
  }
}
