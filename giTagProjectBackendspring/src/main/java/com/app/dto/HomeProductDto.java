package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class HomeProductDto {
	//to show product info on home page
	private int id;//prodcut id
	private double price; 
	private String producDesc;
	private String prodname;
    private String type;
    private String imgname;
	private byte[] data;
}
