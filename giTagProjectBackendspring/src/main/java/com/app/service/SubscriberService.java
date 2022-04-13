package com.app.service;

import java.util.List;

import com.app.dto.AccountInfo;
import com.app.dto.AddressInfo;
import com.app.dto.FetchDetails;
import com.app.dto.RegisterSubscriber;
import com.app.dto.ResponsePassDto;
import com.app.dto.SubscriberInfo;
import com.app.dto.UpdateSubscr;
import com.app.pojos.Rule;
import com.app.pojos.Subscriber;

public interface SubscriberService {


	String addSubscriber (RegisterSubscriber regSubscr);
	
	//FetchDetails fetchDetails(int id);
	
	AccountInfo fetchSubscriberDetails(int subscrId);
	
	AddressInfo fetchSubscriberAddressDetails(int subscrId);
	
	String updateAccountInfo(AccountInfo acct);
	
	String updateAddressInfo(AddressInfo addr);
	
	List<Rule> getRules();
	
	
}
