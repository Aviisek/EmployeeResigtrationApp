import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Employee } from '../employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  getEmployees(){
    return this.httpClient.get<Employee[]>('/api/register/',{
        observe: 'body',
        responseType: 'json'
    })
      .pipe(
        map(
          (employees) => {

            for(let employee of employees){
                  if(employee.gender=='M'){
                    employee.gender = 'Male';
                  }
                  else if(employee.gender=='F'){
                    employee.gender = 'Female';
                  }
                  else{
                    employee.gender = 'Others';
                  }
            }
            return employees;
          }
        )
        
      );
  }

  addEmployee(newEmployee: Employee){
      console.log("inside addEmployee");

      console.log(newEmployee);

      this.httpClient.post('/api/register/save', newEmployee)
          .subscribe(
            (response: Response) => {
              console.log(response);
            }
          );
  }

  errorHandler(error: any): void {
    console.log(error)
  }

}
