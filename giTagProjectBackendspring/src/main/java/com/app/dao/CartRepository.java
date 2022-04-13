package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.CustomerCart;
import com.app.pojos.Product;

public interface CartRepository extends JpaRepository<CustomerCart, Integer> {

	//List<CustomerCart> findByCustomerId(int id);

	List<CustomerCart> findByCustomerIdOrderByCreationDate(int id);
	
	Product findByProductId(int pid);
	

}
