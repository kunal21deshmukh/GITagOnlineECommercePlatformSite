package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.RoleRepository;
import com.app.dao.RuleRepository;
import com.app.dao.SubscriberRepository;
import com.app.dao.UserEntityRepository;
import com.app.dto.AccountInfo;
import com.app.dto.AddressInfo;
import com.app.dto.FetchDetails;
import com.app.dto.RegisterSubscriber;
import com.app.dto.ResponsePassDto;
import com.app.dto.SubscriberInfo;
import com.app.dto.UpdateAccountInfo;
import com.app.dto.UpdateSubscr;
import com.app.pojos.Customer;
import com.app.pojos.Role;
import com.app.pojos.Rule;
import com.app.pojos.Subscriber;
import com.app.pojos.UserEntity;
import com.app.pojos.UserRole;

@Service
@Transactional
public class SubscriberServiceImpl implements SubscriberService{

	@Autowired
	private SubscriberRepository subscrRepo;
	@Autowired
	private RuleRepository ruleRepo;
	@Autowired
	private UserEntityRepository userRepo;
	@Autowired
	private RoleRepository roleRepo;
	
	//================================================================================================================
	//to add subscribe in db
	@Override
	public String addSubscriber(RegisterSubscriber regSubscr) {

		UserEntity user=new UserEntity();
		user.setEmail(regSubscr.getSubscrEmail());
		user.setPassword(regSubscr.getSubscrPassword());
		user.setActive(true);
		userRepo.save(user);
		Role roleData = roleRepo.findByRole(UserRole.SUBSCRIBER).orElseThrow(() -> new RuntimeException("no role is there"));
		user.getRoles().add(roleData);//linking 
		Subscriber subscbr=new Subscriber();
		
		subscbr.setSubscrName(regSubscr.getSubscrName());
		
		subscbr.setSubscrPhoneno(regSubscr.getSubscrPhoneno());
		subscbr.setCity(regSubscr.getCity());
		subscbr.setState(regSubscr.getState());
		subscbr.setCountry(regSubscr.getCountry());
		subscbr.setSubscrDate(LocalDate.now());
		subscbr.setLocation(regSubscr.getLocation());
		subscbr.setStatus(regSubscr.getStatus());
		subscbr.setRule(regSubscr.getRule()); //linking
		subscbr.setZipCode(regSubscr.getZipCode());
		subscbr.setUser(user);
		
		String foldername=regSubscr.getSubscrEmail();
		
		System.out.println("foldername "+foldername);
	    subscrRepo.save(subscbr);	
	    
		return "subscriber with "+subscbr.getId()+" "+"get registerd succesully";
	}

	
   //==========================================================================================================
	//to fetch subscriber details
	@Override
	public AccountInfo fetchSubscriberDetails(int subscrId) {
		Subscriber subscr=subscrRepo.findById(subscrId).orElseThrow(() -> new RuntimeException("Auth Failed"));
		UserEntity user= subscr.getUser();
		return new AccountInfo(subscr.getSubscrName(), user.getEmail(),subscr.getSubscrPhoneno(), subscr.getCity(), subscr.getState(),
				subscr.getCountry(),subscr.getZipCode(), subscr.getLocation());
	}
	//==========================================================================================================
	//to fetch subscriber address details
	@Override
	public AddressInfo fetchSubscriberAddressDetails(int subscrId) {
		Subscriber subscr=subscrRepo.findById(subscrId).orElseThrow(() -> new RuntimeException("Auth Failed"));
		return new AddressInfo(subscr.getCity(), subscr.getState(),
				subscr.getCountry(),subscr.getZipCode(), subscr.getLocation());
	}
	
	//==========================================================================================================
	//to update subscriber details

	@Override
	public String updateAccountInfo(AccountInfo acct) {
		System.out.println("email in acct"+" "+acct.getUserEmail());
		//Subscriber subscr=subscrRepo.findBySubscrEmail(acct.getUserEmail()).orElseThrow(() -> new RuntimeException("Auth Failed"));
		UserEntity sub=userRepo.findByEmail(acct.getUserEmail()).orElseThrow(() -> new RuntimeException("Auth Failed"));
		Subscriber subscr=subscrRepo.findByUserId(sub.getId());
		subscr.setSubscrName(acct.getUserName());
		
		subscr.setSubscrPhoneno(acct.getUserPhoneno());
		subscr.setCity(acct.getUsercity());
		subscr.setState(acct.getUserstate());
		subscr.setCountry(acct.getUsercountry());
		subscr.setZipCode(acct.getUserzipCode());
		subscr.setLocation(acct.getUserlocation());
		subscrRepo.save(subscr);
		return "updated succesfully";
		
	}

	//==========================================================================================================
	//to update subscriber address details
	@Override
	public String updateAddressInfo(AddressInfo addr) {
		Subscriber subscr=subscrRepo.findByZipCode(addr.getUserzipCode()).orElseThrow(() -> new RuntimeException("Auth Failed"));
	    subscr.setCity(addr.getUsercity());
	    subscr.setState(addr.getUserstate());
	    subscr.setCountry(addr.getUsercountry());
	    subscr.setZipCode(addr.getUserzipCode());
	    subscr.setLocation(addr.getUserlocation());
	    subscrRepo.save(subscr);
		return "updated succesfully";
		
	}

	//==========================================================================================================
	//to get list of rules on registartion formof subscriber 
	@Override
	public List<Rule> getRules() {
		
		return ruleRepo.findAll();
	}

	
}
