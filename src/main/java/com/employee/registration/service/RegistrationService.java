package com.employee.registration.service;

import com.employee.registration.domain.Employee;

public interface RegistrationService {
	
	Iterable<Employee> getAllEmployee();
	
	Employee save(Employee employee);

}
