import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http:HttpClient){}

  getAllStudent(){
    return this.http.get(environment.API_URL+"EmployeeApp/GetEmployees")
  }
  createNewEmployee(obj:any){
    // return this.http.(environment.API_URL+"")
  }
}
