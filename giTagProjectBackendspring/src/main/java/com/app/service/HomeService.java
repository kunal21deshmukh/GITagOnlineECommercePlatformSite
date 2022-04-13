package com.app.service;

import java.util.List;

import com.app.dto.HomeProductDto;
import com.app.pojos.Category;


public interface HomeService {

	List<Category> getAllCateg();
	
	List<HomeProductDto> getAllProduct();
	
	List<HomeProductDto> getAllProductByName(String pname);
}
