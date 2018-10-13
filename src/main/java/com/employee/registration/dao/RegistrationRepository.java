package com.employee.registration.dao;

import org.springframework.data.repository.CrudRepository;

import com.employee.registration.domain.Employee;

public interface RegistrationRepository extends CrudRepository<Employee, Long>{

}
