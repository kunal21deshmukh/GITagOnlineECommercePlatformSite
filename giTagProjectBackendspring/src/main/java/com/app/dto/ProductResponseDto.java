package com.app.dto;



import com.app.pojos.Category;
import com.app.pojos.Subscriber;
import com.app.pojos.SubCategory;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponseDto {

	//for updation purpose
	private int id;//product id
	private double price;
   
	private String producDesc;
    
	private String prodname;
   
   
   	private int prodqty;
   
    
    private String type;
    
	private byte[] data;

}

