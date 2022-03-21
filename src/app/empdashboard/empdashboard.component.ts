import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {
  [x: string]: any;
  public test: any = [];
  selectedParam: any;
  data(data: string) {
    this.selectedParam.emit(data);
    console.log("data");
  
  }
  delete(i: any)
  {
    this.test.splice(i,1);
    console.log("row delete",this.test);
  }
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/getEmployeedetail').subscribe(data => {
      console.log(data)
      this.test=data.result
      
    })
    //this.test = [
      // { "empid": "1", "name": "Prajwal", "email": "hgds@gmail.com", "createdate": "1/2/2020", "status": "Good" },
      // { "empid": "2", "name": "Pranitha", "email": "ffhh@gmail.com", "createdate": "3/7/2020", "status": "Good" },
      // { "empid": "3", "name": "Revan", "email": "fgh@gmail.com", "createdate": "5/3/2019", "status": "Good" },
      // { "empid": "4", "name": "Praveen", "email": "rrt@gmail.com", "createdate": "1/8/2018", "status": "Good" },
      // { "empid": "5", "name": "Roshan", "email": "lklk@gmaill.com", "createdate": "4/5/2021", "status": "Good" },
      // { "empid": "6", "name": "Sudeep", "email": "uiu@gmail.com", "createdate": "9/5/2016", "status": "Good" },

    //];

  }


}
