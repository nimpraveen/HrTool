import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_form = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })


  constructor(protected formbuilder: FormBuilder,public router: Router, private http: HttpClient) { 
    this.login_form = this.formbuilder.group({
      email: '',
      password: ''
  
    });
  }

  ngOnInit(): void { 
  }
  login() {
    this.http.post<any>('http://localhost:3000/checkLogin',this.login_form.value).subscribe(data => {
       console.log(data) 
      if(data.status == "success" ){
         this.router.navigate(['empdashboard'])
         console.log(data.status,"Email and Password are valid")
       }
       else {
         alert(" Invalid Email or Password")
       } 
  
  // console.log("=======", this.login_form.value)
  // alert("Ok");
  // this.router.navigate(['empdashboard']);


 
      
    
  

})  
  }}
    