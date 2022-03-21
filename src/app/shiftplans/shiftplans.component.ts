import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shiftplans',
  templateUrl: './shiftplans.component.html',
  styleUrls: ['./shiftplans.component.css']
})
export class ShiftplansComponent implements OnInit {
public test: any = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {this.http.get<any>('http://localhost:3000/shiftPlan', ).subscribe(data => {
   console.log(data)
   this.test=data.result
})
    // this.test =[
    //   {"sunday":"Weekly-Off  1" ,"monday":"General Attendance Policy 2","tuesday":"General Attendance Policy  3","wednesday":"General Attendance Policy 4","thursday":"General Attendance Policy  5","friday":"Genr Attendance Policy  6","saturday":"Weekly-Off  7"},
    //   {"sunday":"Weekly-Off 8","monday":"General Attendance Policy  9","tuesday":"General Attendance Policy  10","wednesday":"General Attendance Policy 11","thursday":"General Attendance Policy  12","friday":"Genr  Attendance Policy  13","saturday":"Weekly-Off 14"},
    //   {"sunday":"Weekly-Off 15","monday":"GeneralAttendance Policy  16","tuesday":"GeneralAttendance Policy  17","wednesday":"GeneralAttendance Policy  18","thursday":"GeneralAttendance Policy  19","friday":"GenrAttendance Policy  20","saturday":"Weekly-Off 21"},
    //   {"sunday":"Weekly-Off 22","monday":"General Attendance Policy  23","tuesday":"General Attendance Policy  24","wednesday":"General Attendance Policy  25","thursday":"Genera Attendance Policy  26","friday":"Genr  Attendance Policy  27","saturday":"Weekly-Off 28"},
    //   {"sunday":"Weekly-Off 29","monday":"General Attendance Policy  30","tuesday":"General Attendance Policy  31"},
      
    // ]
  }

}
