package com.app.service;



import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.app.dto.AccountInfo;
import com.app.dto.AddressInfo;
import com.app.dto.FetchDetails;
import com.app.dto.RegisterCustomer;
import com.app.dto.ResponsePassDto;
import com.app.dto.UpdateCust;
import com.app.dto.UpdateSubscr;
import com.app.dto.feedBackDto;
import com.app.pojos.Customer;
import com.app.pojos.Subscriber;


public interface CustomerService {

	String addCustomer(RegisterCustomer regCust);
	
	
	
	FetchDetails fetchDetails(int id);
	
	AccountInfo fetchCustomerDetails(int custId);
	
	AddressInfo fetchCustomerAddressDetails(int custId);
	
	String updateAccountInfo(AccountInfo acct);
	
	String updateAddressInfo(AddressInfo addr);

    String storeFeedbackInDb(feedBackDto feedback);
}
