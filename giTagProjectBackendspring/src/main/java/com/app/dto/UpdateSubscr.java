package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdateSubscr {

	private String subscrName;
	private String subscrEmail;
	private String subscrPassword;
	  private int sid;
	  private String subscrPhoneno;
	
		private String city;
	
		private String state;
		
		private String country;
		
		private String zipCode;
		
	  private String location;
		
}
