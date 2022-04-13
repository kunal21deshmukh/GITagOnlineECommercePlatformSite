package com.app.dto;

import java.time.LocalDate;


import com.app.pojos.Rule;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data

public class RegisterSubscriber {

	
	  private String subscrName;
	  private String subscrEmail;
	  private String subscrPassword;
	  private String subscrPhoneno;
      private String city;
	  private String state;
	  private String country;
	  private String zipCode;
	  private String location;
	  private Rule rule; 
	  private String status;
	  private LocalDate subscrDate;
	
}
