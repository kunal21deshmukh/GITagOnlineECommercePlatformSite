package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

	List<Product> findBySubscriberId(int id);
	
	List<Product> findBySubcategId(int id);
	
	List<Product> findByProdname(String pnmae);
	
	
}
