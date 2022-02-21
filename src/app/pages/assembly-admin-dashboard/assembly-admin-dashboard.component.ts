import { Component, OnInit } from '@angular/core';
import {PollingMember} from "../../models/PollingMember";
import {AssemblyAdminDashboardService} from "../../services/assembly-admin-dashboard.service";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";
import {AssemblyAdminReport} from "../../models/AssemblyAdminReport";

@Component({
  selector: 'app-assembly-admin-dashboard',
  templateUrl: './assembly-admin-dashboard.component.html',
  styleUrls: ['./assembly-admin-dashboard.component.scss']
})
export class AssemblyAdminDashboardComponent implements OnInit {

  loggedInUser: User | undefined;
  reportData: AssemblyAdminReport[] = []
  constructor(private assemblyAdminDashboardService: AssemblyAdminDashboardService,private authService: AuthService,) { }

  ngOnInit(): void {
    this.loggedInUser = this.authService.userBehaviorSubject.value;

    this.assemblyAdminDashboardService.getReport(this.loggedInUser?.assemblyConstituencyId).subscribe((response: {status:string,message:string,data:AssemblyAdminReport[]}) => {
      this.reportData =  response.data;
    });
    this.assemblyAdminDashboardService.getReportListener().subscribe((response: any) => {
      this.reportData = response;
    });
  }


}
