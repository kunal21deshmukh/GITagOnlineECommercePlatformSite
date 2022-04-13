package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;
import org.springframework.beans.factory.annotation.Required;

import com.app.pojos.Rule;
import com.app.pojos.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data

public class RegisterCustomer {
		  
		  @NotEmpty(message = "name cannot be blank")
	    private String custName;
		 
		  @NotNull
		 
		  @Pattern(regexp="^.*@.*$")
	    private String custEmail;
	    @Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid password")
	    private String custPassword;
	    @NotEmpty(message = "phone no must be supplied")
	    private String custPhoneno;
	    @NotEmpty(message = "city must be supplied")
		private String city;
		@NotEmpty(message = "state must be supplied")
		private String state;
		@NotEmpty(message = "country must be supplied")
		private String country;
		@NotEmpty(message = "zipcode must be supplied")
		private String zipCode;	
		@NotEmpty(message = "location must be supplied")
	    private String location;
	 
		
}
