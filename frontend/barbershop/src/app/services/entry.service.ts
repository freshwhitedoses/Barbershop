import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpContext, HttpParams} from "@angular/common/http";
import {Office} from "../models/office";
import {Entry} from "../models/entry";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntryService{
  entries:Entry[] = []
  constructor(private http:HttpClient) { }

    getAllEntries():Observable<Entry[]>{
      return this.http.get<Entry[]>("http://localhost:8083/entries", {params:new HttpParams()}).pipe(tap(entries=>this.entries=entries))
    }
    addEntry(entry:Entry):Observable<Entry>{
      return this.http.post<Entry>("http://localhost:8083/add/entry",entry).pipe(tap(ent=>this.entries.push(ent)))
    }
}
