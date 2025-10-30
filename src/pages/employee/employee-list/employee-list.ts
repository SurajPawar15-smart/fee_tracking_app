import { Component ,inject, OnInit} from '@angular/core';
import { StudentService } from '../../../core/services/student/student-service';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit{
employeeService=inject(StudentService);
ngOnInit(): void {
    this.getEmployee();
}
getEmployee(){
  this.employeeService.getAllStudent().subscribe((res:any)=>{

  })
}
}
