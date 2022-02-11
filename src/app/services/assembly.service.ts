import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Assembly} from "../models/assembly.model";
import {HttpClient} from "@angular/common/http";
import {ServerResponse} from "../models/ServerResponse.model";
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssemblyService {
  private BASE_API_URL = environment.BASE_API_URL;
  
  personSubject = new Subject<any[]>();

  constructor(private http: HttpClient) {

  }

  getAssemblyWithDistrict():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/allData');
  }
  getAllPersonByAssmblyId(assemblyId:number):any{
    return this.http.get(this.BASE_API_URL + '/person/assembly'+ assemblyId);
  }
  getAllPersonByAssmblyIdListener(){
    return this.personSubject.asObservable();
  }
}
