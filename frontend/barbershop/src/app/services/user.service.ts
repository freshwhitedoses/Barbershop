import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../models/users";
import {Observable, of, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token:string|null
  user:User

  constructor(private http: HttpClient, private router:Router, private rout:ActivatedRoute) {}

  register(user:User):Observable<string>{
    return this.http.post("http://localhost:8083/registration", user, {
      responseType: 'text',
    })
  }

    login(phone:string, password:string):Observable<{accessToken:string}>{
    return this.http.post<{accessToken:string}>("http://localhost:8083/login?phone="+phone+"&password="+password,
      {params:new HttpParams()}).pipe(tap(
      ({accessToken})=>{
        localStorage.setItem('accessToken',accessToken)
        this.setToken(accessToken)
      }
    ))
  }
  getAccount():Observable<User>{
    return this.http.get<User>("http://localhost:8083/account",{params:new HttpParams()})
      .pipe(tap(user=>this.user=user))
  }
  getUser():Observable<User>{
    if(!this.user) return this.getAccount()
    return of(this.user)
  }
  setToken(token:string|null) {
    this.token = token
  }
  getToken():string{
    return this.token as string
  }
  isAuthenticated():boolean{
    return !!this.token
  }
  logout(){
    this.setToken(null)
    localStorage.clear()
  }

}
