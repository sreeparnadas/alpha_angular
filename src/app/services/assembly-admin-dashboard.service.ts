import { Injectable } from '@angular/core';
import {PollingVolunteer} from "../models/PollingVolunteer";
import {catchError, tap} from "rxjs/operators";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AssemblyAdminReport} from "../models/AssemblyAdminReport";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AssemblyAdminDashboardService {
  private BASE_API_URL = environment.BASE_API_URL;
  reportData: AssemblyAdminReport[] = [];
  reportDataSubject = new Subject<any[]>();

  constructor(private http: HttpClient, private errorService: ErrorService) { }


  getReport(assemblyId:number):any{

    return this.http.get<{status:string,message:string,data:PollingVolunteer[]}>(this.BASE_API_URL + '/assembly/admin/dashboard/'+ assemblyId)
      .pipe(catchError(this.errorService.serverError),
        tap((response : {status:string,message:string,data:AssemblyAdminReport[]}) => {
          this.reportData = response.data;
          this.reportDataSubject.next([...this.reportData]);
        }));

  }
  getReportListener(){
    return this.reportDataSubject.asObservable();
  }

}
