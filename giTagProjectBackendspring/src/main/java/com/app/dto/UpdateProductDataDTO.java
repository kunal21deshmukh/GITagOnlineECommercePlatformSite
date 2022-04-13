package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdateProductDataDTO {
	
    private int id;//product id
	private String prodname;
	private String producDesc;
	private int prodqty;
	private double price;
}
