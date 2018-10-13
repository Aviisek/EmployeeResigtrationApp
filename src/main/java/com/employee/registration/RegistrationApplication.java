package com.employee.registration;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.employee.registration.domain.Employee;
import com.employee.registration.service.RegistrationService;

@SpringBootApplication
public class RegistrationApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegistrationApplication.class, args);
	}
	
	@Bean
	CommandLineRunner runner(RegistrationService service){
		return args -> {
			service.save(new Employee(1L,"Abhishek","Kumar",'M',new Date(),"IT"));
		};
	}
}
