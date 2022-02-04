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

  constructor(private http: HttpClient) {

  }

  getAssemblyForDistrict1():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/district/1');
  }
  getAssemblyForDistrict2():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/district/2');
  }
  getAssemblyForDistrict3():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/district/3');
  }
  getAssemblyForDistrict4():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/district/4');
  }
  getAssemblyForDistrict5():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/district/5');
  }
  getAssemblyForDistrict6():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/district/6');
  }
  getAssemblyForDistrict7():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/district/7');
  }
  getAssemblyForDistrict8():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/district/8');
  }
  getAssemblyForDistrict9():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/district/9');
  }
  getAssemblyForDistrict10():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/district/10');
  }
  getAssemblyForDistrict11():any{
    return this.http.get(this.BASE_API_URL + '/dev/assembly/district/11');
  }

}
