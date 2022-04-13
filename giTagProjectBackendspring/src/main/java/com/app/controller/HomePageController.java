package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.HomeProductDto;
import com.app.dto.SearchProductDto;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.service.HomeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/home")
public class HomePageController 
{
	@Autowired
	private HomeService hmService;
	
	public HomePageController() {
		System.out.println("in homePage controller");
	}
	@GetMapping("/categ")
	public ResponseEntity<List<Category>> getAllCategories()
	{
		System.out.println("in category checking");
		return ResponseEntity.ok(hmService.getAllCateg());
	}
	@GetMapping("/products")
	public ResponseEntity<List<HomeProductDto>> getAllProducts()
	{
		System.out.println("in home product checking");
		return ResponseEntity.ok(hmService.getAllProduct());
	}
	
	@PostMapping("/search")
	public ResponseEntity<List<HomeProductDto>> getAllProductsAccrToName(@RequestBody SearchProductDto prodName)
	{
		//System.out.println("000000000000000000000000000000000000000000000000000000000");
		
	String proString=prodName.getPname();
	String[] split = proString.split(" ");
	String output="";
	for(String s :split)
	{
		output += s.substring(0, 1).toUpperCase() + s.substring(1)+" "; //s.substring(0, 1).toUpperCase()--1st letter to capital
	}                                                                  // s.substring(1)--bakiche concat karayla
	int lastIndexOf = output.lastIndexOf(" ");
	String last=output.substring(0, lastIndexOf); 
	System.out.println("****---///// "+last);
	System.out.println("in home product checking");
	System.out.println(output);
	return ResponseEntity.ok(hmService.getAllProductByName(last)); 
	}
	
}
