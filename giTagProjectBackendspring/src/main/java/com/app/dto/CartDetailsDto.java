package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CartDetailsDto {

	private int id;//customer id
	private int prodId;//prodcut id
    private int cartquantity;
}
