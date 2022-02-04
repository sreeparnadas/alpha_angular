import { Component, OnInit } from '@angular/core';
import {AssemblyService} from "../services/assembly.service";
import {Assembly} from "../models/assembly.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  assembliesForDistrict1: Assembly[] = [];
  assembliesForDistrict2: Assembly[] = [];
  assembliesForDistrict3: Assembly[] = [];
  assembliesForDistrict4: Assembly[] = [];
  assembliesForDistrict5: Assembly[] = [];
  assembliesForDistrict6: Assembly[] = [];
  assembliesForDistrict7: Assembly[] = [];
  assembliesForDistrict8: Assembly[] = [];
  assembliesForDistrict9: Assembly[] = [];
  assembliesForDistrict10: Assembly[] = [];
  assembliesForDistrict11: Assembly[] = [];
  constructor(private assemblyService: AssemblyService) { }

  ngOnInit(): void {
     this.assemblyService.getAssemblyForDistrict1().subscribe((response: {success:boolean,message:string,data:Assembly[]}) => {
       this.assembliesForDistrict1 = response.data;
     });
    this.assemblyService.getAssemblyForDistrict2().subscribe((response: {success:boolean,message:string,data:Assembly[]}) => {
      this.assembliesForDistrict2 = response.data;
    });
    this.assemblyService.getAssemblyForDistrict3().subscribe((response: {success:boolean,message:string,data:Assembly[]}) => {
      this.assembliesForDistrict3 = response.data;
    });
    this.assemblyService.getAssemblyForDistrict4().subscribe((response: {success:boolean,message:string,data:Assembly[]}) => {
      this.assembliesForDistrict4 = response.data;
    });
    this.assemblyService.getAssemblyForDistrict5().subscribe((response: {success:boolean,message:string,data:Assembly[]}) => {
      this.assembliesForDistrict5 = response.data;
    });
    this.assemblyService.getAssemblyForDistrict6().subscribe((response: {success:boolean,message:string,data:Assembly[]}) => {
      this.assembliesForDistrict6 = response.data;
    });
    this.assemblyService.getAssemblyForDistrict7().subscribe((response: {success:boolean,message:string,data:Assembly[]}) => {
      this.assembliesForDistrict7 = response.data;
    });
    this.assemblyService.getAssemblyForDistrict8().subscribe((response: {success:boolean,message:string,data:Assembly[]}) => {
      this.assembliesForDistrict8 = response.data;
    });
    this.assemblyService.getAssemblyForDistrict9().subscribe((response: {success:boolean,message:string,data:Assembly[]}) => {
      this.assembliesForDistrict9 = response.data;
    });
    this.assemblyService.getAssemblyForDistrict10().subscribe((response: {success:boolean,message:string,data:Assembly[]}) => {
      this.assembliesForDistrict10 = response.data;
    });
    this.assemblyService.getAssemblyForDistrict11().subscribe((response: {success:boolean,message:string,data:Assembly[]}) => {
      this.assembliesForDistrict11 = response.data;
    });

  }
  counter(i: number) {
    return new Array(i);
  }

}
