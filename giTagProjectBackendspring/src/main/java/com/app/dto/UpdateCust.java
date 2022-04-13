package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdateCust {

	private String custName;
	private String custEmail;
	private String custPassword;
	  private int sid;
	  private String custPhoneno;
	
		private String city;
	
		private String state;
		
		private String country;
		
		private String zipCode;
		
	  private String location;
		
}
