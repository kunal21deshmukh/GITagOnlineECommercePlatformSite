package com.app.dto;

import java.time.LocalDate;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.app.pojos.Rule;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SubscriberInfo {
	  
	  private int Rid;
	  private String subscrName;
	  private String subscrEmail;
	  @Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid password")
	  private String subscrPassword;
	  @NotNull(message = "phone no cannot be blank")
	  private String subscrPhoneno;
	 
	  private String city;
	  private String state;
	  private String country;
	  private String zipCode;
	  @NotEmpty(message = "location must be supplied")
	  private String location;
	  
	  
}
