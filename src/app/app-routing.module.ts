import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ShiftplansComponent } from './shiftplans/shiftplans.component';
import { LeavedetailsComponent } from './leavedetails/leavedetails.component';


const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'empdashboard',component: EmpdashboardComponent},
  {path:'empdetails',component: EmpdetailsComponent},
  {path:'attendance',component: AttendanceComponent},
  {path:'shiftplans',component: ShiftplansComponent},
  {path:'leavedetails',component: LeavedetailsComponent},
  {path:'**',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
