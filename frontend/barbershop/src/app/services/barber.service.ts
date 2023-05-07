import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import {Barber} from "../models/barber";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BarberService {
  barbers:Barber[]=[]
  constructor(private http: HttpClient) { }
  getAllBarbers():Observable<Barber[]>{
    return this.http.get<Barber[]>("http://localhost:8083/barbers", {params:new HttpParams()}).pipe(tap(barbers=>this.barbers=barbers))
  }
  addBarber(barber:Barber):Observable<Barber>{
    return this.http.post<Barber>("http://localhost:8083/add/barber",barber).pipe(tap(barb=>this.barbers.push(barb)))
  }
  getExperience(name:string | undefined):string | undefined{
    return this.barbers.find(it => it.name=<string>name)?.experience
  }
}
