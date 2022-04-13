package com.app.service;

import java.util.List;


import com.app.dto.CartDetailsDto;
import com.app.dto.CartDto;
import com.app.dto.FinalOrder;
import com.app.dto.OrderDetails;
import com.app.dto.OrderDetailsList;
import com.app.dto.UpdateCartQtyDto;
import com.app.pojos.CustomerCart;

public interface CartService {

	String addToCart(CartDetailsDto cartdata);

	//List<CustomerCart>  getAllCartItems(int id);

    CartDto listCartItems(int id);

	String deleteCartItem(int cartItemId);

	//String updateItemQtyPlus(UpdateCartQtyDto cartQtyData);
	
	String updateItemQty(UpdateCartQtyDto cartQtyData);

	CartDto getAllSelectedItems(int cartItemId);

	//String updateItemQtyMinus(UpdateCartQtyDto cartQtyData);
	
	String addToOrder(FinalOrder order);
	
	OrderDetailsList orderData(int id);
	


}
