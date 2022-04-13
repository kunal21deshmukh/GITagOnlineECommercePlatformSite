package com.app.controller;
import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AccountInfo;
import com.app.dto.AddressInfo;
import com.app.dto.FetchDetails;
import com.app.dto.PasswordDto;
import com.app.dto.RegisterCustomer;
import com.app.dto.ResponsePassDto;
import com.app.dto.UpdateCust;
import com.app.dto.UpdateSubscr;
import com.app.dto.feedBackDto;
import com.app.pojos.Customer;
import com.app.pojos.Subscriber;
import com.app.pojos.UserEntity;
import com.app.service.CustomerService;
import com.app.service.EmailService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/customer")  //please add meaning ful mapping name as per front end
public class CustomerController
{

	@Autowired
	private CustomerService custService;
	
	@Autowired
	private EmailService emailServ;
	

	//======================================================================================================================
	public CustomerController()
	{
		System.out.println("in customer controller");
	}

	//======================================================================================================================
	//to register a new customer and add details in database on clicking register button
	@PostMapping("/register")
	public ResponseEntity<?>  registerCustomer(@RequestBody @Valid RegisterCustomer cust)
	{
		String email=cust.getCustEmail();
		String pass=cust.getCustPassword();
		System.out.println("in check");
		emailServ.sendEmailForNewRegistration(email,pass);
		return ResponseEntity.ok(custService.addCustomer(cust));
	}
	
	//======================================================================================================================

    
    //======================================================================================================================
    //to give details when customer click on your account info button
    @PostMapping("/{custId}")
    public ResponseEntity<AccountInfo> getCustDetails(@PathVariable int custId)
    {  //? is replaced by Employee here and var by list of employee
   	 System.out.println("in get customer details"+custId);
   	 
   	  return  ResponseEntity.ok(custService.fetchCustomerDetails(custId));
    }
    
    //======================================================================================================================
    //to update his account info---1st id ne get id karun info yeil and then putmapping hoil
    @PutMapping("/accountInfoUpdate") 
    public ResponseEntity<String> updateAccount(@RequestBody @Valid AccountInfo accnt)
    {
    	//aftter updating react madhun aapan /customer/id la push karnar so ti req yeun as response update data milel
    	 return  ResponseEntity.ok(custService.updateAccountInfo(accnt));
    }
    
    //======================================================================================================================
    @PutMapping ("/addressInfoUpdate") 
    public ResponseEntity<String> updateAddress(@RequestBody @Valid AddressInfo addr)
    {
    	//aftter updating react madhun aapan /customer/id la push karnar so ti req yeun as response update data milel
    	 return  ResponseEntity.ok(custService.updateAddressInfo(addr));
    }
    
    //======================================================================================================================
    //to give address info on order checkout page
    @GetMapping("/{custId}")
    public ResponseEntity<AddressInfo> getCustAddressDetails(@PathVariable int custId)
    {  //? is replaced by Employee here and var by list of employee
   	 System.out.println("in get address of customer"+custId);
   	  return  ResponseEntity.ok(custService.fetchCustomerAddressDetails(custId));
    }
    
    //======================================================================================================================
    @GetMapping("/acc/{sid}")
	public ResponseEntity<?> getCustomerDetails(@PathVariable int sid)
	{
		System.out.println("i am here to get customer details");
		FetchDetails fetchCustDetails=custService.fetchDetails(sid);
		return new ResponseEntity<>(fetchCustDetails,HttpStatus.OK);
	}
    
    //=======================================================================================================================
    //to store feedack given by customer
    @PostMapping("/feedback")
    public ResponseEntity<String> storeFeedback(@RequestBody feedBackDto feedback)
    {
    	System.out.println("in feedback store");
	
		return ResponseEntity.ok(custService.storeFeedbackInDb(feedback));
    }
}
