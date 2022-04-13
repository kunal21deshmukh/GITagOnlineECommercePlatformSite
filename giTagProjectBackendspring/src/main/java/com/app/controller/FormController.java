package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Category;
import com.app.pojos.SubCategory;
import com.app.service.CustomerService;
import com.app.service.FormService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/form")
public class FormController {
	
	@Autowired
	private FormService formService;
	public FormController()
	{
		System.out.println("in form controller");
	}
	
	//add a method to get all sub category as per catg id
	@GetMapping("/subcatg/{id}")
	public List<SubCategory>  getAllsubcatgAccordToCatg(@PathVariable int id)
	{
		return formService.findAllSubCatg(id);
	}
	
}
