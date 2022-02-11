import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Assembly} from "../models/assembly.model";
import {HttpClient} from "@angular/common/http";
import {ServerResponse} from "../models/ServerResponse.model";
import {Subject} from 'rxjs';
import {ErrorService} from './error.service';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssemblyService {
  private BASE_API_URL = environment.BASE_API_URL;

  pollingMemberSubject = new Subject<any[]>();
  pollingMembers: any;
  constructor(private http: HttpClient, private errorService: ErrorService) {

  }

  getAssemblyWithDistrict():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/allData');
  }
  getAllPersonByAssemblyId(assemblyId:number):any{

    return this.http.get(this.BASE_API_URL + '/person/assembly/'+ assemblyId)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        console.log('service ', response);
        // this.pollingMemberSubject.next([...this.pollingMembers]);
      }));

  }
  getAllPersonByAssemblyIdListener(){
    return this.pollingMemberSubject.asObservable();
  }
}
