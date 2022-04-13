package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.dto.ResponsePassDto;
import com.app.pojos.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{

	//Optional<Customer> findByCustEmail(String email);
	
	Optional<Customer> findByZipCode(String zip);
	
	Customer findByUserId(int id);
	//Customer findByCustEmailAndCustPassword(String email,String pass);
	
	
}
