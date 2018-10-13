package com.employee.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.registration.domain.Employee;
import com.employee.registration.service.RegistrationService;

@RestController
@RequestMapping("/api/register")
public class RegistrationController {
	
	@Autowired
	private RegistrationService service;
	
	@GetMapping("/")
	public Iterable<Employee> getAllEmployee() {
		return this.service.getAllEmployee();
	}
	
	@PostMapping("/save")
	public Employee saveEmployee(@RequestBody Employee employee) {
			return this.service.save(employee);

	}
	

}
