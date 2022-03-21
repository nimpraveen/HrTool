import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,} from '@angular/forms';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-leavedetails',
  templateUrl: './leavedetails.component.html',
  styleUrls: ['./leavedetails.component.css']
})
export class LeavedetailsComponent implements OnInit {
  leave_form = new FormGroup({
    starting: new FormControl(),
    ending: new FormControl(),
  })
public test:any =[];
public test1:any =[];

  constructor(protected formbuilder: FormBuilder,private http:HttpClient) { 
    this.leave_form = this.formbuilder.group({
      starting: '',
      ending: '' 
  })
  }


  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/penddingLeaves',).subscribe(data => { 
    console.log(data)
    this.test=data.result
    })
    // this.test =[
    //   {"leavetype":"Casual Leave","starting":"2/08/2021","ending":"10/08/2021","status":"Pending"},
    //   {"leavetype":"sick Leave","starting":"7/08/2021","ending":"13/08/2021","status":"Pending"},
    //   {"leavetype":"Casual Leave","starting":"16/08/2021","ending":"22/08/2021","status":"Pending "},
    //   {"leavetype":"Comp Off","starting":"18/08/2021","ending":"25/08/2021","status":"Pending"},
    //   {"leavetype":"Casual Leave","starting":"23/08/2021","ending":"29/08/2021","status":"Pending"},
    // ];
    this.http.get<any>('http://localhost:3000/approvedLeaves').subscribe(data => {
      console.log(data)
     this.test1=data.result     
  })
    // this.test1 =[
    //   {"leavetype":"Casual Leave","starting":"2/08/2021","ending":"10/08/2021","status":"Approved"},
    //   {"leavetype":"sick Leave","starting":"7/08/2021","ending":"13/08/2021","status":"Approved"},
    //   {"leavetype":"Casual Leave","starting":"16/08/2021","ending":"22/08/2021","status":"Approved"},
    //   {"leavetype":"Comp Off","starting":"18/08/2021","ending":"25/08/2021","status":"Approved"},
    //   {"leavetype":"Casual Leave","starting":"23/08/2021","ending":"29/08/2021","status":"Approved"},
    // ];
    
  }
  submit (){
    this.http.post<any>('http://localhost:3000/createLeave',this.leave_form.value).subscribe(data => {
      console.log(data)
    })
     console.log("=======", this.leave_form.value)
   }
  }


