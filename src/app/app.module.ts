import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ShiftplansComponent } from './shiftplans/shiftplans.component';
import { LeavedetailsComponent } from './leavedetails/leavedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EmpdashboardComponent,
    EmpdetailsComponent,
    AttendanceComponent,
    ShiftplansComponent,
    LeavedetailsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
