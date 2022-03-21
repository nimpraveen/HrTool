import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  public test: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/getAttendancelog').subscribe(data => {
      console.log(data)
      this.test=data.result
     
  })
  
  
  //   this.test = [
  //     {"date":"12 Aug 2021,Thu","timein":"10:10:10 AM","timeout":"08:10:00 PM","workduration":"10:00:00","overtime":"01:00:00","lateby":"","status":"Present","location":"Office"},
  //     {"date":"11 Aug 2021,Wed","timein":"10:15:20 AM","timeout":"08:20:12 PM","workduration":"10:05:48","overtime":"01:05:10","lateby ":"","status":"Present","location":"Office"}, 
  //     {"date":"10 Aug 2021,Tue","timein":"10:20:40 AM","timeout":"07:30:45 PM","workduration":"09:10:12","overtime":"00:10:40","lateby ":"","status":"Present","location":"Office"}, 
  //     {"date":"09 Aug 2021,Mon","timein":"10:12:10 AM","timeout":"08:40:35 PM","workduration":"10:28:14","overtime":"01:28:30","lateby ":"","status":"Present","location":"Office"},
  //     {"date":"08 Aug 2021,Sun","timein":"","timeout":"","workduration":"","overtime ":"","lateby ":"","status":"Weekly off","location":""},
  //     {"date":"07 Aug 2021,Sat","timein":"","timeout":"","workduration ":"","overtime ":"","lateby ":"","status":"Weekly off","location":""},
  //     {"date":"06 Aug 2021,Fri","timein":"10:14:00 AM","timeout":"09:00:52 PM","workduration":"11:46:00","overtime":"02:46:14","lateby":"","status":"Present","location":"Office"},
  //     {"date":"05 Aug 2021,Thu","timein":"10:00:00 AM","timeout":"07:42:12 PM","workduration":"09:42:00","overtime":"00:42:12","lateby ":"","status":"Present","location":"Office"},
  //     {"date":"04 Aug 2021,Wed","timein":"","timeout":"","workduration":"","overtime":"","lateby":"","status":"Absent Halfday leave(Privilege Leave)","location":"Office"},
  //     {"date":"03 Aug 2021,Tue","timein":"10:20:40 AM","timeout":"07:30:45 PM","workduration":"09:10:00","overtime":"00:10:40","lateby":"","status":"Present","location":"Office"}, 
  //   ];
  // }

}
}
