import { Injectable } from '@angular/core';
import {Office} from "../models/office";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {Barber} from "../models/barber";

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  offices:Office[] = []
  constructor(private http:HttpClient) { }
  getAllOffices():Observable<Office[]>{
    return this.http.get<Office[]>("http://localhost:8083/offices", {params:new HttpParams()}).pipe(tap(offices=>this.offices=offices))
  }
  addOffice(office:Office):Observable<Office>{
    return this.http.post<Office>("http://localhost:8083/add/office",office).pipe(tap(off=>this.offices.push(off)))
  }
}
