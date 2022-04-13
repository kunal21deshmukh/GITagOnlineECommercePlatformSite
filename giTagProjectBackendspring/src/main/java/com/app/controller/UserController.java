package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.PasswordDto;
import com.app.dto.ResponsePassDto;
import com.app.dto.UserRoleResponse;
import com.app.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class UserController {

	@Autowired
	private UserService userService;
	
	public UserController()
	{
		System.out.println("in user controller");
	}
	
	 //whenever user wants to access any page he has to login after login we are going to send role also
	  @PostMapping("/login")
	  public ResponseEntity<UserRoleResponse> userLogin(@RequestBody @Valid LoginRequest req)
	  {
		  System.out.println("in check of login");
		  return ResponseEntity.ok(userService.userLoginCheck(req.getEmail(),req.getPassword()));
	  }
	
	//to retrive password when customer click on forgot pass
    @PostMapping("/forgotPass")
    public ResponseEntity<ResponsePassDto> retrivePassword(@RequestBody @Valid PasswordDto pass)
    {
    	System.out.println("in check of forgot pass");
    	
    	return ResponseEntity.ok(userService.retrivepass(pass.getEmail()));
    }
	
	
}
