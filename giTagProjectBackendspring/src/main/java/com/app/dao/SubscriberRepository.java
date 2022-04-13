package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Customer;
import com.app.pojos.Subscriber;

public interface SubscriberRepository extends JpaRepository<Subscriber, Integer>{

  //Optional<Subscriber> findBySubscrEmail(String email);
//	
	Optional<Subscriber> findByZipCode(String zip);
	//Subscriber findByUser(int id);
	Subscriber findByUserId(int id);
//	Subscriber findBySubscrEmailAndSubscrPassword(String email,String pass);
	
	
}
