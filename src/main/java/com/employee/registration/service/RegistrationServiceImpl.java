package com.employee.registration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.registration.dao.RegistrationRepository;
import com.employee.registration.domain.Employee;

@Service
public class RegistrationServiceImpl implements RegistrationService {
	
	@Autowired
	private RegistrationRepository repository;

	@Override
	public Iterable<Employee> getAllEmployee() {
		return this.repository.findAll();
	}

	@Override
	public Employee save(Employee employee) {
		return this.repository.save(employee);
	}

}
