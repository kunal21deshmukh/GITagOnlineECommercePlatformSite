package com.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	public TestController() {
		System.out.println("in constr of"+getClass());
	}
	
	@GetMapping("/customer")
	public String test1()
	{
		return "hello,customer...";
	}
	
	
	@GetMapping("/register")
	public String test4()
	{
		return "hello,kunal.";
	}
	
}
