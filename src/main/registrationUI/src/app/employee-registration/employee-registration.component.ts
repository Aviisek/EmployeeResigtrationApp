import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../employee.model';
import { NgForm } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  @ViewChild('f') eForm: NgForm;

  employee: Employee = {
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    department: ''

  }

  constructor(private clientService: ClientService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {

  }

  onSubmit( form: NgForm){

    const val = form.value;

    this.employee = new Employee(val.firstName,val.lastName,val.gender,this.datePipe.transform(val.dob, 'MM/dd/yyyy'),val.dept);

    this.clientService.addEmployee(this.employee);
    this.router.navigate(['/']);
    

  }

  onClear(){
      this.eForm.reset();
  }

}
