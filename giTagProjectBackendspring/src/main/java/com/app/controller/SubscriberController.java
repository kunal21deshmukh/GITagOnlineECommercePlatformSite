package com.app.controller;
import java.util.List;

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
import com.app.dto.RegisterSubscriber;
import com.app.dto.ResponsePassDto;
import com.app.dto.SubscriberInfo;
import com.app.dto.UpdateSubscr;
import com.app.pojos.Customer;
import com.app.pojos.Rule;
import com.app.pojos.Subscriber;
import com.app.pojos.UserEntity;
import com.app.service.CustomerService;
import com.app.service.SubscriberService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/subscriber")  //please add meaning ful mapping name as per front end
public class SubscriberController
{

	@Autowired
	private SubscriberService subscrService;
	
   //===============================================================================================================
	public SubscriberController()
	{
		System.out.println("in subscriber controller");
	}

	//===============================================================================================================
	@PostMapping("/register")
	public ResponseEntity<?> registerSubscriber(@RequestBody @Valid RegisterSubscriber subscr )
	{
		System.out.println("in check");
		System.out.println("sub info"+subscr);
		
		return ResponseEntity.ok(subscrService.addSubscriber(subscr));
	}
	
	//===============================================================================================================

	//=================================================================================================================
	
	@GetMapping("/rules")
	public ResponseEntity<List<Rule>> getSubscriberRules()
	{
		System.out.println("in rule checking");
		return ResponseEntity.ok(subscrService.getRules());
	}
		
	//===============================================================================================================
//	//to retrive password when subscriber click on forgot pass
//    @PostMapping("/forgotPass")
//    public ResponseEntity<ResponsePassDto> retrivePassword(@RequestBody @Valid PasswordDto pass)
//    {
//    	System.out.println("in check of forgot pass");
//    	return ResponseEntity.ok(subscrService.retrivepass(pass.getUserEmail()));
//    }
	//===============================================================================================================
    //to give details when subscriber click on your account info button
    @PostMapping("/{subscrId}")
    public ResponseEntity<AccountInfo> getSubscrDetails(@PathVariable int subscrId)
    { 
   	   System.out.println("in get subscriber details"+subscrId);
   	   return  ResponseEntity.ok(subscrService.fetchSubscriberDetails(subscrId));
    }
	//===============================================================================================================
  //to update his account info---1st id ne get id karun info yeil and then putmapping hoil
    @PutMapping("/accountInfoUpdate") 
    public ResponseEntity<String> updateAccount(@RequestBody @Valid AccountInfo accnt)
    {
    	//aftter updating react madhun aapan /subscriber/id la push karnar so ti req yeun as response update data milel
    	 return  ResponseEntity.ok(subscrService.updateAccountInfo(accnt));
    }
	//===============================================================================================================
    @PutMapping ("/addressInfoUpdate") 
    public ResponseEntity<String> updateAddress(@RequestBody @Valid AddressInfo addr)
    {
    	//aftter updating react madhun aapan /customer/id la push karnar so ti req yeun as response update data milel
    	 return  ResponseEntity.ok(subscrService.updateAddressInfo(addr));
    }
	//===============================================================================================================
    //to give address info on order checkout page
    @GetMapping("/{subscrId}")
    public ResponseEntity<AddressInfo> getCustAddressDetails(@PathVariable int subscrId)
    {  //? is replaced by Employee here and var by list of employee
   	 System.out.println("in get address of customer"+subscrId);
   	  return  ResponseEntity.ok(subscrService.fetchSubscriberAddressDetails(subscrId));
    }
   //===============================================================================================================
}
