package com.app.service;

import java.io.IOException;

import java.util.List;

import com.app.dto.HomeProductDto;
import com.app.dto.Productdto;
import com.app.dto.SubcategProductDto;
import com.app.dto.UpdateProductDataDTO;




public interface ProductService {

	void addProduct(Productdto u);
	
	List<com.app.dto.ProductResponseDto>  retriveData(int id) throws IOException;
	
	UpdateProductDataDTO retriveprodData(int id);
	
	String updateData(UpdateProductDataDTO updateprod);
	
	List<SubcategProductDto> getAllSubcategoryProduct(int id);
}
