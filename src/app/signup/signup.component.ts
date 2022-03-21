// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder ,} from '@angular/forms';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   signup_form = new FormGroup({
//     name: new FormControl(),
//     email: new FormControl(),
//     phone: new FormControl(),
//     empid: new FormControl(),
//     password: new FormControl(),
//     address: new FormControl(),
//     roles: new FormControl(),
//   })

//   constructor( private formblider:FormBuilder) { 
//     this.signup_form = this.formblider.group({
//  name:'',
//  email:'',
//  phone:'',
//  empid:'',
//  password:'',
//  address:'',
//  roles:'',
//     })
//   }

//   ngOnInit(): void {
//   }
// signup (){
//   console.log("=======", this.signup_form.value)
// }

// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder ,Validators} from '@angular/forms';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup_form = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    empid: new FormControl(),
    password: new FormControl(),
    address: new FormControl(),
    roles: new FormControl(),
  })

  constructor( private formblider:FormBuilder,
    private http: HttpClient) { 
    this.signup_form = this.formblider.group({
 name:'',
 email:'',
 phone:'',//[ [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
 empid:'',
 password:'',
 address:'',
 roles:'',
    })
    }

  ngOnInit(): void {
    
  }
 signup (){
  this.http.post<any>('http://localhost:3000/createEmployee',this.signup_form.value).subscribe(data => {
    console.log(data)


   
})
 
   console.log("=======", this.signup_form.value)
 }
}