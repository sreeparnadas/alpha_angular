import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {UserRegistration} from "../models/userRegistration.model";
import {catchError, tap} from 'rxjs/operators';
import {PollingMember} from "../models/PollingMember";
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  private BASE_API_URL = environment.BASE_API_URL;
  pollingMemberSubject = new Subject<any[]>();
  pollingMembers: PollingMember[] = [];

  constructor(private http: HttpClient, private errorService: ErrorService) { }


  getAllPersonByAssemblyId(assemblyId:number):any{

    return this.http.get<{status:string,message:string,data:PollingMember[]}>(this.BASE_API_URL + '/person/assembly/'+ assemblyId)
      .pipe(catchError(this.errorService.serverError),
        tap((response : {status:string,message:string,data:PollingMember[]}) => {
          this.pollingMembers = response.data;
          this.pollingMemberSubject.next([...this.pollingMembers]);
        }));

  }
  getAllPersonByAssemblyIdListener(){
    return this.pollingMemberSubject.asObservable();
  }

  saveNewUser(userData: any){
    return this.http.post<{status:boolean, message:string ,data:UserRegistration}>(this.BASE_API_URL + '/person', userData)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        console.log(response.data);
        this.pollingMembers.unshift(response.data);
        this.pollingMemberSubject.next([...this.pollingMembers]);
      }));
  }
}
