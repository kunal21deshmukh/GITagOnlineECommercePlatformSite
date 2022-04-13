package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class feedBackDto {
	
	private int custId;
	private int subscrId;
	private int rating;
	private String prodName;
}
