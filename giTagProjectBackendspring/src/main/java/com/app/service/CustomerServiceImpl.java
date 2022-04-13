package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerRepository;
import com.app.dao.FeedBackRepository;
import com.app.dao.RoleRepository;
import com.app.dao.SubscriberRepository;
import com.app.dao.UserEntityRepository;
import com.app.dto.AccountInfo;
import com.app.dto.AddressInfo;
import com.app.dto.FetchDetails;
import com.app.dto.RegisterCustomer;
import com.app.dto.ResponsePassDto;
import com.app.dto.UpdateCust;
import com.app.dto.feedBackDto;
import com.app.pojos.Customer;
import com.app.pojos.FeedBack;
import com.app.pojos.Role;
import com.app.pojos.Subscriber;
import com.app.pojos.UserEntity;
import com.app.pojos.UserRole;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository custRepo;
	@Autowired
	private SubscriberRepository subscrRepo;
	@Autowired
	private UserEntityRepository userRepo;
	@Autowired
	private FeedBackRepository feedRepo;
	@Autowired
	private RoleRepository roleRepo;
	
	//===================================================================================================================
	// storing customer info in customer tabl and email n pass in user tbl
	@Override
	public String addCustomer(RegisterCustomer regCust) {
		//we taking mail n pass also from front end and we want to store it in userentity table 
		UserEntity user=new UserEntity(); //creting obj of userEntity
		user.setEmail(regCust.getCustEmail()); 
		user.setPassword(regCust.getCustPassword());
		user.setActive(true);
		userRepo.save(user); //saving in db
		Role roleData = roleRepo.findByRole(UserRole.CUSTOMER).orElseThrow(() -> new RuntimeException("no role is there"));
		user.getRoles().add(roleData);//linking of user and role 
		Customer cust=new Customer(); //creating customer obj
		cust.setCity(regCust.getCity());
		cust.setCountry(regCust.getCountry());
		cust.setCustName(regCust.getCustName());
		cust.setCustPhoneno(regCust.getCustPhoneno());
		cust.setState(regCust.getState());
		cust.setZipCode(regCust.getZipCode());
		cust.setLocation(regCust.getLocation());
		cust.setUser(user); //userId FK storing in customer table
		custRepo.save(cust);  //saving customer in db
		return "customer with "+cust.getId()+" "+"get registerd succesully";
	}

	
	//===================================================================================================================
	//to get customer details
	@Override
	public AccountInfo fetchCustomerDetails(int custId) {
		Customer cust=custRepo.findById(custId).orElseThrow(() -> new RuntimeException("Auth Failed"));
		UserEntity user= cust.getUser();
		return new AccountInfo(cust.getCustName(), user.getEmail(),cust.getCustPhoneno(), cust.getCity(), cust.getState(),
				cust.getCountry(),cust.getZipCode(), cust.getLocation());
	}

	//===================================================================================================================
	//to get customer address details
	@Override
	public AddressInfo fetchCustomerAddressDetails(int custId) {
		Customer cust=custRepo.findById(custId).orElseThrow(() -> new RuntimeException("Auth Failed"));
		return new AddressInfo(cust.getCity(), cust.getState(),
				cust.getCountry(),cust.getZipCode(), cust.getLocation());
	}
	
	//===================================================================================================================
	//to update customer  details
	@Override
	public String updateAccountInfo(AccountInfo acct) {
		System.out.println("email in acct"+" "+acct.getUserEmail());
		UserEntity cust=userRepo.findByEmail(acct.getUserEmail()).orElseThrow(() -> new RuntimeException("Auth Failed"));
		System.out.println("password "+" "+cust.getPassword());
//		Customer updateCust=new Customer(acct.getUserName(),acct.getUserEmail(),cust.getCustPassword(),acct.getUserPhoneno()
//				, acct.getUsercity(), acct.getUserstate(), acct.getUsercountry(), acct.getUserzipCode(), acct.getUserlocation());
//		
		//Customer custom=custRepo.findByUser(cust.getId());
		Customer custom=custRepo.findByUserId(cust.getId());
		custom.setCustName(acct.getUserName());
		
		custom.setCustPhoneno(acct.getUserPhoneno());
		custom.setCity(acct.getUsercity());
		custom.setState(acct.getUserstate());
		custom.setCountry(acct.getUsercountry());
		custom.setZipCode(acct.getUserzipCode());
		custom.setLocation(acct.getUserlocation());
		custRepo.save(custom);
		return "updated succesfully";
		
	}

	//===================================================================================================================
	//to update customer address  details
	@Override
	public String updateAddressInfo(AddressInfo addr) {
		Customer cust=custRepo.findByZipCode(addr.getUserzipCode()).orElseThrow(() -> new RuntimeException("Auth Failed"));
	    cust.setCity(addr.getUsercity());
	    cust.setState(addr.getUserstate());
	    cust.setCountry(addr.getUsercountry());
	    cust.setZipCode(addr.getUserzipCode());
	    cust.setLocation(addr.getUserlocation());
	    custRepo.save(cust);
		return "updated succesfully";
	}

	//===================================================================================================================
	//to fetch customer  details
	@Override
	public FetchDetails fetchDetails(int id) {
		FetchDetails fetch=new FetchDetails();
		Customer cust=custRepo.findById(id).orElseThrow(()->new RuntimeException("Auth Failed"));
		fetch.setUsercity(cust.getCity());
		fetch.setUsercountry(cust.getCountry());
		fetch.setUserName(cust.getCustName());
		fetch.setUserlocation(cust.getLocation());
		fetch.setUserstate(cust.getState());
		fetch.setUserzipCode(cust.getZipCode());
		fetch.setUserPhoneno(cust.getCustPhoneno());
		return fetch;
	}


	@Override
	public String storeFeedbackInDb(feedBackDto feedback) {
		FeedBack fdbk=new FeedBack();
		System.out.println(feedback.getCustId());
		System.out.println(feedback.getSubscrId());
		
		Customer cust = custRepo.findById(feedback.getCustId()).orElseThrow(()->new RuntimeException("no customer in db"));
		
		Subscriber subscr = subscrRepo.findById(feedback.getSubscrId()).orElseThrow(()->new RuntimeException("no subscriber in db"));
		
		fdbk.setCustomer(cust);
		fdbk.setProductName(feedback.getProdName());
		fdbk.setRating(feedback.getRating());
		fdbk.setSubscriber(subscr);
		feedRepo.save(fdbk);
		return "ur feedback is stored";
	}

	

}
