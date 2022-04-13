package com.app.dto;

import com.app.pojos.CustomerCart;
import com.app.pojos.Product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CartItemDto {
 
	private int id; //custid
	private int quantity;
	private Product product;
	
	public CartItemDto(CustomerCart cart)
	{
		this.id=cart.getId();
		this.quantity=cart.getCartquantity();
		this.setProduct(cart.getProduct());
	}
}
