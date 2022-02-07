import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {UserRegistration} from "../models/userRegistration.model";
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  private BASE_API_URL = environment.BASE_API_URL;
  constructor(private http: HttpClient, private errorService: ErrorService) { }

  saveNewUser(userData: any){
    return this.http.post<{status:boolean, message:string ,data:UserRegistration}>(this.BASE_API_URL + '/person', userData)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        console.log('service', response);
      }));
  }
}
