import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]; 

  constructor(private clientService: ClientService) { }

  ngOnInit() {

    this.clientService.getEmployees()
          .subscribe(     
            (employees: Employee[]) => {      
              this.employees = employees;
              console.log("in service");
              console.log(this.employees);
          }
          )
  }

}
