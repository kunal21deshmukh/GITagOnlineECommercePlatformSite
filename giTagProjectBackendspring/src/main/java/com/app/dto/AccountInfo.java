package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AccountInfo {

	
	  private String userName;
	  private String userEmail;
	  
	  private String userPhoneno;
	  private String usercity;
	  private String userstate;
	  private String usercountry;
	  private String userzipCode;
	  private String userlocation;
	public AccountInfo(String userName, String userPhoneno, String usercity, String userstate, String usercountry,
			String userzipCode, String userlocation) {
		super();
		this.userName = userName;
		this.userPhoneno = userPhoneno;
		this.usercity = usercity;
		this.userstate = userstate;
		this.usercountry = usercountry;
		this.userzipCode = userzipCode;
		this.userlocation = userlocation;
	}
	  
	  
}
